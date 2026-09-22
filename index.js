const crypto = require('node:crypto');
const {
  ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType, Client, EmbedBuilder,
  Events, GatewayIntentBits, MessageFlags, PermissionFlagsBits,
} = require('discord.js');

const PREFIX = '!';
const MAX_RECRUIT_MEMBERS = 4;
const INVITE_MAX_AGE_SECONDS = 60 * 60;
const OUTING_ROLE_ID = '998138756739633204';
const OUTING_LOG_MARKER = '핑구봇 외출 로그 채널';
const BOT_OWNER_USER_ID = '393017142087516160';
const BOT_MANAGER_USER_IDS = new Set([BOT_OWNER_USER_ID]);
const CHAT_CLEAR_CONFIRM_SECONDS = 60;
const TEAM_CHANNEL_IDS = [
  '835845662758797312', '835845625957711893', '835845808212541442',
  '835845743842951168', '835845775740502096', '937670883944857620',
  '835845837749092372', '835845874323161088', '835845904018833409',
  '835845943394959441', '835846052648845343', '835846092242419742',
  '835846122789404702', '835846217425747968', '835846265634947073',
];

const teamSessions = new Map();
const outingLogChannelIds = new Map();

function shuffleMembers(members, randomInt = crypto.randomInt) {
  const shuffled = [...members];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = randomInt(index + 1);
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function splitIntoTeams(members, teamSize) {
  const shuffled = shuffleMembers(members);
  const teamCount = Math.ceil(shuffled.length / teamSize);
  const teams = Array.from({ length: teamCount }, () => []);
  shuffled.forEach((member, index) => teams[index % teamCount].push(member));
  return teams;
}

function buildTeamButtons(sessionId, state = 'ready') {
  const isDispatched = state === 'dispatched';
  const isCompleted = state === 'completed';
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`team:dispatch:${sessionId}`)
      .setLabel(isDispatched ? '출동 완료' : '팀별 채널로 출동')
      .setEmoji('🚀').setStyle(ButtonStyle.Success)
      .setDisabled(isDispatched || isCompleted),
    new ButtonBuilder()
      .setCustomId(`team:return:${sessionId}`)
      .setLabel(isCompleted ? '복귀 완료' : '해산하고 원래 채널로 복귀')
      .setEmoji('🏠').setStyle(ButtonStyle.Secondary)
      .setDisabled(!isDispatched || isCompleted),
  );
}

function buildOutingPanel() {
  const embed = new EmbedBuilder()
    .setColor(0x5865f2)
    .setTitle('🐧 외출 · 복귀 상태 관리')
    .setDescription(
      '자리를 비울 때는 **외출** 버튼을 눌러 주세요.\n' +
      '다시 돌아오면 **복귀** 버튼을 누르면 됩니다.',
    )
    .addFields(
      { name: '🚶 외출', value: `<@&${OUTING_ROLE_ID}> 역할을 부여합니다.`, inline: true },
      { name: '🏠 복귀', value: `<@&${OUTING_ROLE_ID}> 역할을 제거합니다.`, inline: true },
    )
    .setFooter({ text: '기존 역할은 변경되지 않으며 CGC:외출중 역할만 추가하거나 제거합니다.' });

  const buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId('outing:leave')
      .setLabel('외출')
      .setEmoji('🚶')
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId('outing:return')
      .setLabel('복귀')
      .setEmoji('🏠')
      .setStyle(ButtonStyle.Success),
  );

  return { embeds: [embed], components: [buttons] };
}

function buildChatClearConfirmation(channelId, requestedAt = Math.floor(Date.now() / 1_000)) {
  const embed = new EmbedBuilder()
    .setColor(0xed4245)
    .setTitle('⚠️ 현재 채널 전체 삭제')
    .setDescription(
      '이 채널의 메시지를 **가능한 범위에서 모두 삭제**합니다.\n' +
      '고정 메시지와 핑구봇 패널도 함께 삭제되며 복구할 수 없습니다.',
    )
    .setFooter({ text: `${CHAT_CLEAR_CONFIRM_SECONDS}초 안에 확인 버튼을 눌러 주세요.` });

  const buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`chatclear:confirm:${channelId}:${requestedAt}`)
      .setLabel('현재 채널 전체 삭제')
      .setEmoji('🗑️')
      .setStyle(ButtonStyle.Danger),
    new ButtonBuilder()
      .setCustomId(`chatclear:cancel:${channelId}:${requestedAt}`)
      .setLabel('취소')
      .setStyle(ButtonStyle.Secondary),
  );

  return { embeds: [embed], components: [buttons] };
}

function buildOutingLogRegistrationEmbed() {
  return new EmbedBuilder()
    .setColor(0x5865f2)
    .setTitle('📋 외출 로그 채널 등록 완료')
    .setDescription('이 채널에 핑구봇의 **외출·복귀 기록**이 자동으로 저장됩니다.')
    .addFields(
      { name: '기록 항목', value: '사용자 · 상태 · 처리 시각' },
      { name: '보관 방식', value: 'Discord 메시지로 보관되어 Heroku가 재시작되어도 유지됩니다.' },
    )
    .setFooter({ text: OUTING_LOG_MARKER })
    .setTimestamp();
}

function buildOutingLogEntry({ userId, displayName, avatarUrl, action, timestamp = Date.now() }) {
  const isLeaving = action === 'leave';
  const unixTimestamp = Math.floor(timestamp / 1_000);
  const embed = new EmbedBuilder()
    .setColor(isLeaving ? 0xf59e0b : 0x22c55e)
    .setTitle(isLeaving ? '🚶 외출 기록' : '🏠 복귀 기록')
    .setDescription(isLeaving ? '외출 상태로 변경되었습니다.' : '외출을 마치고 복귀했습니다.')
    .addFields(
      { name: '사용자', value: `<@${userId}>\n${displayName}`, inline: true },
      { name: '처리 시각', value: `<t:${unixTimestamp}:F>\n<t:${unixTimestamp}:R>`, inline: true },
      { name: '사용자 ID', value: `\`${userId}\``, inline: false },
    )
    .setFooter({ text: '핑구봇 외출 관리 기록' })
    .setTimestamp(timestamp);

  if (avatarUrl) embed.setThumbnail(avatarUrl);
  return embed;
}

function buildTeamEmbed(teams, teamSize) {
  const selectedTeamIndex = crypto.randomInt(teams.length);
  const fishCount = crypto.randomInt(30, 101);
  return new EmbedBuilder()
    .setColor(0x7c5cff)
    .setTitle('🐧 핑구봇 팀 편성 완료!')
    .setDescription(
      `음성 채널 인원을 팀당 **최대 ${teamSize}명**으로 고르게 섞었어요.\n` +
      '아래 **출동 버튼**을 누르면 팀별 음성 채널로 이동합니다.',
    )
    .addFields([
      ...teams.map((team, index) => ({
        name: `${index + 1}팀  ·  ${team.length}명`,
        value: team.map((member) => `<@${member.id}>`).join('\n'),
        inline: true,
      })),
      {
        name: '🐟 오늘의 핑구 픽',
        value: `**${selectedTeamIndex + 1}팀**에 생선 **${fishCount}개**를 걸었어요!`,
        inline: false,
      },
    ])
    .setFooter({ text: '마이크를 끈 인원과 봇은 팀 편성에서 제외됩니다.' })
    .setTimestamp();
}

function buildMentionContent(teams) {
  const lines = teams.map(
    (team, index) => `**${index + 1}팀**  ${team.map((member) => `<@${member.id}>`).join(' ')}`,
  );
  const content = ['📣 **팀 배정 알림**', ...lines].join('\n');
  return content.length <= 2_000 ? content : null;
}

function buildHelpEmbed() {
  return new EmbedBuilder()
    .setColor(0x7c5cff)
    .setTitle('🐧 핑구봇 명령어 안내')
    .setDescription('음성 채널에서 친구들과 더 빠르고 재미있게 모여 보세요!')
    .addFields(
      { name: '🎲 `!팀 인원수`', value: '현재 음성 채널 인원을 무작위로 섞어 팀을 만들어요.\n예시: `!팀 2`' },
      { name: '🚀 팀 출동 / 🏠 해산·복귀', value: '팀 편성 메시지 아래 버튼으로 이동하고, 끝난 뒤 원래 음성 채널로 돌아와요.\n`!출동` 명령어도 계속 사용할 수 있어요.' },
      { name: '📣 `!구인구직` 또는 `!모여라`', value: '현재 음성 채널의 1시간짜리 초대장을 예쁘게 만들어 모집해요.' },
      { name: '🚶 외출 · 복귀', value: '외출 관리 채널에서 버튼으로 상태를 변경해요.\n관리자: `!외출`, `!외출로그`' },
      { name: '🛡️ 핑구봇 소유자', value: '`!채팅삭제`로 명령어를 입력한 현재 채널만 확인 후 정리할 수 있어요.' },
      { name: '💡 이용 팁', value: '먼저 음성 채널에 입장해 주세요. 마이크를 끈 인원과 봇은 팀 편성에서 제외돼요.' },
    )
    .setFooter({ text: '핑구봇과 즐거운 게임 되세요!' })
    .setTimestamp();
}

function buildRecruitEmbed(message, voiceChannel, currentMembers, remainingMembers, expiresAt) {
  const statusText = remainingMembers > 0 ? `앞으로 **${remainingMembers}명** 더 모이면 출발!` : '**현재 정원이에요!**';
  return new EmbedBuilder()
    .setColor(0xf062d0)
    .setAuthor({ name: `${message.member.displayName}님의 파티 모집`, iconURL: message.author.displayAvatarURL() })
    .setTitle('🐧 같이 게임할 사람, 여기 모여라!')
    .setDescription(`### 🔊 ${voiceChannel.name}\n${statusText}`)
    .addFields(
      { name: '현재 인원', value: `👥 **${currentMembers} / ${MAX_RECRUIT_MEMBERS}명**`, inline: true },
      { name: '남은 자리', value: `✨ **${remainingMembers}자리**`, inline: true },
      { name: '초대장 만료', value: `<t:${expiresAt}:R>`, inline: true },
    )
    .setFooter({ text: '아래 버튼을 누르면 음성 채널로 바로 참여할 수 있어요.' })
    .setTimestamp();
}

function isBotManager(userId, memberPermissions) {
  return BOT_MANAGER_USER_IDS.has(userId) ||
    memberPermissions?.has(PermissionFlagsBits.Administrator);
}

function canControlSession(userId, memberPermissions, session) {
  return userId === session.ownerId || session.memberIds.has(userId) ||
    isBotManager(userId, memberPermissions) ||
    memberPermissions?.has(PermissionFlagsBits.MoveMembers);
}

function findOutingRole(guild) {
  const role = guild.roles.cache.get(OUTING_ROLE_ID);
  return role && !role.managed ? role : null;
}

function getOutingRoleError(guild, role) {
  const botMember = guild.members.me;
  if (!role) return `외출 역할(<@&${OUTING_ROLE_ID}>)을 찾을 수 없어요. 역할 ID와 서버를 확인해 주세요.`;
  if (!botMember?.permissions.has(PermissionFlagsBits.ManageRoles)) {
    return '핑구봇에게 **역할 관리** 권한이 필요합니다.';
  }
  if (botMember.roles.highest.comparePositionTo(role) <= 0) {
    return '서버 역할 설정에서 **핑구봇 역할을 CGC:외출중 역할보다 위로** 올려 주세요.';
  }
  return null;
}

function isOutingLogMarker(message, botUserId) {
  return message.author.id === botUserId &&
    message.embeds.some((embed) => embed.footer?.text === OUTING_LOG_MARKER);
}

async function findOutingLogChannel(guild) {
  const cachedChannelId = outingLogChannelIds.get(guild.id);
  const cachedChannel = cachedChannelId ? guild.channels.cache.get(cachedChannelId) : null;
  if (cachedChannel?.isTextBased()) return cachedChannel;

  let newestRegistration = null;
  const channels = [...guild.channels.cache.values()].filter((channel) =>
    channel.type === ChannelType.GuildText || channel.type === ChannelType.GuildAnnouncement,
  );

  for (const channel of channels) {
    try {
      const pinned = await channel.messages.fetchPins();
      for (const item of pinned.items) {
        const pinnedMessage = item.message;
        if (!isOutingLogMarker(pinnedMessage, guild.client.user.id)) continue;
        const registeredAt = pinnedMessage.editedTimestamp ?? pinnedMessage.createdTimestamp;
        if (!newestRegistration || registeredAt > newestRegistration.registeredAt) {
          newestRegistration = { channel, registeredAt };
        }
      }
    } catch {
      // 봇이 볼 수 없거나 기록 조회 권한이 없는 채널은 건너뜁니다.
    }
  }

  if (!newestRegistration) return null;
  outingLogChannelIds.set(guild.id, newestRegistration.channel.id);
  return newestRegistration.channel;
}

async function writeOutingLog(guild, member, action) {
  const logChannel = await findOutingLogChannel(guild);
  if (!logChannel) return false;

  await logChannel.send({
    embeds: [buildOutingLogEntry({
      userId: member.id,
      displayName: member.displayName,
      avatarUrl: member.displayAvatarURL(),
      action,
    })],
  });
  return true;
}

function summarizeMoveResults(results) {
  return results.reduce((summary, result) => {
    if (result.status === 'rejected') summary.failed += 1;
    else summary[result.value] += 1;
    return summary;
  }, { moved: 0, skipped: 0, failed: 0 });
}

async function dispatchTeams(guild, session) {
  const tasks = [];
  session.teams.forEach((team, teamIndex) => {
    const targetChannel = guild.channels.cache.get(TEAM_CHANNEL_IDS[teamIndex]);
    team.forEach((memberId) => {
      tasks.push((async () => {
        const member = guild.members.cache.get(memberId);
        if (!member?.voice.channelId) return 'skipped';
        if (!targetChannel || targetChannel.type !== ChannelType.GuildVoice) {
          throw new Error(`${teamIndex + 1}팀 음성 채널을 찾을 수 없습니다.`);
        }
        session.originalChannels.set(memberId, member.voice.channelId);
        if (member.voice.channelId === targetChannel.id) return 'skipped';
        await member.voice.setChannel(targetChannel, '핑구봇 팀 출동');
        return 'moved';
      })());
    });
  });
  return summarizeMoveResults(await Promise.allSettled(tasks));
}

async function returnTeams(guild, session) {
  const tasks = [...session.memberIds].map(async (memberId) => {
    const member = guild.members.cache.get(memberId);
    const originalChannelId = session.originalChannels.get(memberId);
    // 이미 음성 채널을 나간 사람은 조용히 건너뜁니다.
    if (!member?.voice.channelId || !originalChannelId) return 'skipped';
    const originalChannel = guild.channels.cache.get(originalChannelId);
    if (!originalChannel || originalChannel.type !== ChannelType.GuildVoice) return 'skipped';
    if (member.voice.channelId === originalChannel.id) return 'skipped';
    await member.voice.setChannel(originalChannel, '핑구봇 팀 해산 및 복귀');
    return 'moved';
  });
  return summarizeMoveResults(await Promise.allSettled(tasks));
}

async function updateSessionButtons(guild, session, state) {
  try {
    const channel = guild.channels.cache.get(session.textChannelId);
    if (!channel?.isTextBased()) return;
    const teamMessage = await channel.messages.fetch(session.messageId);
    await teamMessage.edit({ components: [buildTeamButtons(session.id, state)] });
  } catch (error) {
    console.warn('팀 편성 메시지 버튼 갱신 실패:', error.message);
  }
}

function formatMoveSummary(action, summary) {
  const details = [`이동 ${summary.moved}명`];
  if (summary.skipped > 0) details.push(`건너뜀 ${summary.skipped}명`);
  if (summary.failed > 0) details.push(`실패 ${summary.failed}명`);
  return `${action} 완료! (${details.join(' · ')})`;
}

async function handleTeamCommand(message, args) {
  const teamSize = Number.parseInt(args[0], 10);
  if (!Number.isInteger(teamSize) || teamSize < 1) {
    await message.reply('팀당 인원수를 숫자로 입력해 주세요. 예: `!팀 2`');
    return;
  }
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel) {
    await message.reply('먼저 음성 채널에 들어가 주세요!');
    return;
  }
  const activeSession = teamSessions.get(message.guild.id);
  if (activeSession?.inProgress) {
    await message.reply('현재 팀 이동을 처리하고 있어요. 완료된 뒤 다시 시도해 주세요.');
    return;
  }
  if (activeSession?.dispatched) {
    await message.reply('출동 중인 팀이 있어요. 기존 팀 편성 메시지에서 **해산·복귀**한 뒤 새 팀을 만들어 주세요.');
    return;
  }
  const members = [...voiceChannel.members.values()].filter(
    (member) => !member.user.bot && !member.voice.selfMute && !member.voice.serverMute,
  );
  if (members.length < teamSize) {
    await message.reply(`참여 가능한 인원이 부족해요. 현재 팀 편성 가능 인원은 **${members.length}명**입니다.`);
    return;
  }
  const teamCount = Math.ceil(members.length / teamSize);
  if (teamCount > TEAM_CHANNEL_IDS.length) {
    await message.reply(`팀 채널은 최대 **${TEAM_CHANNEL_IDS.length}개**까지 사용할 수 있어요. 팀당 인원수를 늘려 주세요.`);
    return;
  }
  const teams = splitIntoTeams(members, teamSize);
  const sessionId = crypto.randomBytes(6).toString('hex');
  const memberIds = new Set(teams.flat().map((member) => member.id));
  const session = {
    id: sessionId, ownerId: message.author.id, memberIds,
    teams: teams.map((team) => team.map((member) => member.id)),
    originalChannels: new Map(), textChannelId: message.channel.id,
    messageId: null, dispatched: false, inProgress: false,
  };
  const mentionContent = buildMentionContent(teams);
  const sentMessage = await message.channel.send({
    content: mentionContent ?? '📣 **팀 편성이 완료됐어요! 아래에서 내 팀을 확인하세요.**',
    embeds: [buildTeamEmbed(teams, teamSize)],
    components: [buildTeamButtons(sessionId)],
    allowedMentions: { users: [...memberIds] },
  });
  session.messageId = sentMessage.id;
  teamSessions.set(message.guild.id, session);
}

async function handleRecruitCommand(message) {
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel) {
    await message.reply('먼저 음성 채널에 들어가 주세요!');
    return;
  }
  const invite = await voiceChannel.createInvite({
    maxAge: INVITE_MAX_AGE_SECONDS, maxUses: 0, unique: true,
    reason: `${message.author.tag}님의 핑구봇 구인구직`,
  });
  const currentMembers = voiceChannel.members.filter((member) => !member.user.bot).size;
  const remainingMembers = Math.max(MAX_RECRUIT_MEMBERS - currentMembers, 0);
  const expiresAt = Math.floor(Date.now() / 1_000) + INVITE_MAX_AGE_SECONDS;
  const joinButton = new ButtonBuilder()
    .setLabel('음성 채널 참여하기').setEmoji('🎮')
    .setStyle(ButtonStyle.Link).setURL(invite.url);
  await message.channel.send({
    content: `📣 <@${message.author.id}>님이 함께할 파티원을 찾고 있어요!`,
    embeds: [buildRecruitEmbed(message, voiceChannel, currentMembers, remainingMembers, expiresAt)],
    components: [new ActionRowBuilder().addComponents(joinButton)],
    allowedMentions: { users: [message.author.id] },
  });
}

async function handleLegacyDispatchCommand(message) {
  const session = teamSessions.get(message.guild.id);
  if (!session) {
    await message.reply('먼저 `!팀 인원수`로 팀을 만들어 주세요.');
    return;
  }
  if (session.dispatched) {
    await message.reply('이미 팀별 채널로 출동했어요. 팀 편성 메시지의 복귀 버튼을 이용해 주세요.');
    return;
  }
  if (session.inProgress) {
    await message.reply('이미 팀 이동을 처리하고 있어요. 잠시만 기다려 주세요.');
    return;
  }
  if (!canControlSession(message.author.id, message.member.permissions, session)) {
    await message.reply('팀 참가자 또는 멤버 이동 권한이 있는 사람만 출동시킬 수 있어요.');
    return;
  }
  const progressMessage = await message.reply('🚀 팀별 음성 채널로 이동하고 있어요...');
  session.inProgress = true;
  try {
    const summary = await dispatchTeams(message.guild, session);
    session.dispatched = true;
    await updateSessionButtons(message.guild, session, 'dispatched');
    await progressMessage.edit(formatMoveSummary('🚀 출동', summary));
  } finally {
    session.inProgress = false;
  }
}

async function handleOutingPanelCommand(message) {
  if (!isBotManager(message.author.id, message.member.permissions)) {
    await message.reply('이 명령어는 서버 관리자만 사용할 수 있어요.');
    return;
  }

  const role = findOutingRole(message.guild);
  const roleError = getOutingRoleError(message.guild, role);
  if (roleError) {
    await message.reply(roleError);
    return;
  }

  const pinned = await message.channel.messages.fetchPins();
  const existingPanel = pinned.items
    .map((item) => item.message)
    .find((pinnedMessage) =>
      pinnedMessage.author.id === message.client.user.id &&
      pinnedMessage.components.some((row) =>
        row.components.some((component) => component.customId === 'outing:leave'),
      ),
    );

  if (existingPanel) {
    await existingPanel.edit(buildOutingPanel());
    await message.reply(`이미 이 채널에 외출 패널이 등록되어 있어요: ${existingPanel.url}`);
    return;
  }

  const panelMessage = await message.channel.send(buildOutingPanel());
  try {
    await panelMessage.pin('핑구봇 외출·복귀 패널 등록');
    await message.reply(`외출·복귀 패널을 만들고 고정했어요: ${panelMessage.url}`);
  } catch (error) {
    console.warn('외출 패널 고정 실패:', error.message);
    await message.reply(`패널은 만들었지만 고정하지 못했어요. 관리자가 직접 고정해 주세요: ${panelMessage.url}`);
  }
}

async function handleOutingLogCommand(message) {
  if (!isBotManager(message.author.id, message.member.permissions)) {
    await message.reply('이 명령어는 서버 관리자만 사용할 수 있어요.');
    return;
  }

  const pinned = await message.channel.messages.fetchPins();
  const existingMarker = pinned.items
    .map((item) => item.message)
    .find((pinnedMessage) => isOutingLogMarker(pinnedMessage, message.client.user.id));

  if (existingMarker) {
    await existingMarker.edit({ embeds: [buildOutingLogRegistrationEmbed()] });
    outingLogChannelIds.set(message.guild.id, message.channel.id);
    await message.reply(`이미 이 채널이 외출 로그 채널로 등록되어 있어요: ${existingMarker.url}`);
    return;
  }

  const markerMessage = await message.channel.send({ embeds: [buildOutingLogRegistrationEmbed()] });
  outingLogChannelIds.set(message.guild.id, message.channel.id);
  try {
    await markerMessage.pin('핑구봇 외출 로그 채널 등록');
    await message.reply(`이 채널을 외출 로그 채널로 등록하고 고정했어요: ${markerMessage.url}`);
  } catch (error) {
    console.warn('외출 로그 채널 표시 메시지 고정 실패:', error.message);
    await message.reply(`로그 채널은 등록했지만 표시 메시지를 고정하지 못했어요. 직접 고정해 주세요: ${markerMessage.url}`);
  }
}

async function handleChatClearCommand(message) {
  if (message.author.id !== BOT_OWNER_USER_ID) {
    await message.reply('이 명령어는 핑구봇 소유자만 사용할 수 있어요.');
    return;
  }

  const botPermissions = message.guild.members.me.permissionsIn(message.channel);
  if (!botPermissions.has(PermissionFlagsBits.ManageMessages) ||
      !botPermissions.has(PermissionFlagsBits.ReadMessageHistory)) {
    await message.reply('핑구봇에게 이 채널의 **메시지 관리**와 **메시지 기록 보기** 권한이 필요합니다.');
    return;
  }

  await message.channel.send(buildChatClearConfirmation(message.channel.id));
}

async function deleteMessagesIndividually(messages) {
  let deleted = 0;
  let failed = 0;
  for (const message of messages.values()) {
    if (!message.deletable) {
      failed += 1;
      continue;
    }
    try {
      await message.delete();
      deleted += 1;
    } catch {
      failed += 1;
    }
  }
  return { deleted, failed };
}

async function clearChannelMessages(channel) {
  const fourteenDaysAgo = Date.now() - (14 * 24 * 60 * 60 * 1_000) + 10_000;
  let before;
  let totalDeleted = 0;
  let totalFailed = 0;

  while (true) {
    const batch = await channel.messages.fetch({ limit: 100, ...(before ? { before } : {}) });
    if (batch.size === 0) break;
    before = batch.last().id;

    const recent = batch.filter((message) => message.createdTimestamp > fourteenDaysAgo && message.deletable);
    const oldOrRestricted = batch.filter((message) => !recent.has(message.id));

    if (recent.size > 1) {
      try {
        const deleted = await channel.bulkDelete(recent, true);
        totalDeleted += deleted.size;
        totalFailed += recent.size - deleted.size;
      } catch {
        const result = await deleteMessagesIndividually(recent);
        totalDeleted += result.deleted;
        totalFailed += result.failed;
      }
    } else if (recent.size === 1) {
      const result = await deleteMessagesIndividually(recent);
      totalDeleted += result.deleted;
      totalFailed += result.failed;
    }

    const oldResult = await deleteMessagesIndividually(oldOrRestricted);
    totalDeleted += oldResult.deleted;
    totalFailed += oldResult.failed;

    if (batch.size < 100) break;
  }

  return { deleted: totalDeleted, failed: totalFailed };
}

async function handleMessage(message) {
  if (!message.guild || message.author.bot || !message.content.startsWith(PREFIX)) return;
  const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
  const command = args.shift()?.toLowerCase();
  try {
    if (command === '팀') await handleTeamCommand(message, args);
    else if (command === '출동') await handleLegacyDispatchCommand(message);
    else if (command === '구인구직' || command === '모여라') await handleRecruitCommand(message);
    else if (command === '외출') await handleOutingPanelCommand(message);
    else if (command === '외출로그') await handleOutingLogCommand(message);
    else if (command === '채팅삭제') await handleChatClearCommand(message);
    else if (command === '핑구봇명령어' || command === '핑구봇사용법') {
      await message.channel.send({ embeds: [buildHelpEmbed()] });
    }
  } catch (error) {
    console.error(`명령어 처리 실패 (${command}):`, error);
    await message.reply('명령어를 처리하는 중 문제가 생겼어요. 잠시 후 다시 시도해 주세요.').catch(() => {});
  }
}

async function handleOutingButton(interaction) {
  const role = findOutingRole(interaction.guild);
  const roleError = getOutingRoleError(interaction.guild, role);
  if (roleError) {
    await interaction.reply({ content: roleError, flags: MessageFlags.Ephemeral });
    return;
  }

  const action = interaction.customId.split(':')[1];
  const member = interaction.member;
  const hasOutingRole = member.roles.cache.has(role.id);

  if (action === 'leave' && hasOutingRole) {
    await interaction.reply({ content: '이미 외출 상태예요. 조심히 다녀오세요! 🐧', flags: MessageFlags.Ephemeral });
    return;
  }
  if (action === 'return' && !hasOutingRole) {
    await interaction.reply({ content: '이미 복귀 상태예요. 어서 오세요! 🐧', flags: MessageFlags.Ephemeral });
    return;
  }

  await interaction.deferReply({ flags: MessageFlags.Ephemeral });
  if (action === 'leave') {
    await member.roles.add(role, '핑구봇 외출 버튼 사용');
    await interaction.editReply('🚶 외출 상태로 변경했어요. 조심히 다녀오세요!');
    await writeOutingLog(interaction.guild, member, action).catch((error) =>
      console.warn('외출 기록 저장 실패:', error.message),
    );
  } else if (action === 'return') {
    await member.roles.remove(role, '핑구봇 복귀 버튼 사용');
    await interaction.editReply('🏠 복귀 완료! 다시 오신 것을 환영해요.');
    await writeOutingLog(interaction.guild, member, action).catch((error) =>
      console.warn('복귀 기록 저장 실패:', error.message),
    );
  }
}

async function handleChatClearButton(interaction) {
  if (interaction.user.id !== BOT_OWNER_USER_ID) {
    await interaction.reply({ content: '이 버튼은 핑구봇 소유자만 사용할 수 있어요.', flags: MessageFlags.Ephemeral });
    return;
  }

  const [, action, channelId, requestedAtText] = interaction.customId.split(':');
  if (interaction.channelId !== channelId) {
    await interaction.reply({ content: '삭제 요청 채널이 일치하지 않아요.', flags: MessageFlags.Ephemeral });
    return;
  }

  const requestedAt = Number.parseInt(requestedAtText, 10);
  const isExpired = !Number.isInteger(requestedAt) ||
    Math.floor(Date.now() / 1_000) - requestedAt > CHAT_CLEAR_CONFIRM_SECONDS;
  if (isExpired) {
    await interaction.reply({ content: '삭제 확인 시간이 만료됐어요. `!채팅삭제`를 다시 입력해 주세요.', flags: MessageFlags.Ephemeral });
    return;
  }

  if (action === 'cancel') {
    await interaction.deferUpdate();
    await interaction.message.delete().catch(() => {});
    return;
  }

  if (action !== 'confirm') return;
  await interaction.deferReply({ flags: MessageFlags.Ephemeral });
  const result = await clearChannelMessages(interaction.channel);
  const details = [`삭제 ${result.deleted}개`];
  if (result.failed > 0) details.push(`삭제 불가 ${result.failed}개`);
  await interaction.editReply(`🗑️ 현재 채널 정리를 완료했어요. (${details.join(' · ')})`);
}

async function handleTeamButton(interaction) {
  const [, action, sessionId] = interaction.customId.split(':');
  const session = teamSessions.get(interaction.guildId);
  if (!session || session.id !== sessionId) {
    await interaction.reply({ content: '이 팀 편성은 만료됐어요. `!팀 인원수`로 새로 만들어 주세요.', flags: MessageFlags.Ephemeral });
    return;
  }
  if (!canControlSession(interaction.user.id, interaction.memberPermissions, session)) {
    await interaction.reply({ content: '팀 참가자 또는 멤버 이동 권한이 있는 사람만 사용할 수 있어요.', flags: MessageFlags.Ephemeral });
    return;
  }
  if (session.inProgress) {
    await interaction.reply({ content: '이미 팀 이동을 처리하고 있어요. 잠시만 기다려 주세요.', flags: MessageFlags.Ephemeral });
    return;
  }
  if (action === 'dispatch') {
    if (session.dispatched) {
      await interaction.reply({ content: '이미 출동한 팀이에요.', flags: MessageFlags.Ephemeral });
      return;
    }
    await interaction.deferReply({ flags: MessageFlags.Ephemeral });
    session.inProgress = true;
    try {
      const summary = await dispatchTeams(interaction.guild, session);
      session.dispatched = true;
      await updateSessionButtons(interaction.guild, session, 'dispatched');
      await interaction.editReply(formatMoveSummary('🚀 출동', summary));
    } finally {
      session.inProgress = false;
    }
    return;
  }
  if (action === 'return') {
    if (!session.dispatched) {
      await interaction.reply({ content: '아직 출동하지 않은 팀이에요.', flags: MessageFlags.Ephemeral });
      return;
    }
    await interaction.deferReply({ flags: MessageFlags.Ephemeral });
    session.inProgress = true;
    try {
      const summary = await returnTeams(interaction.guild, session);
      await updateSessionButtons(interaction.guild, session, 'completed');
      teamSessions.delete(interaction.guildId);
      await interaction.editReply(formatMoveSummary('🏠 해산·복귀', summary));
    } finally {
      session.inProgress = false;
    }
  }
}

async function handleButton(interaction) {
  if (!interaction.isButton()) return;

  try {
    if (interaction.customId.startsWith('outing:')) {
      await handleOutingButton(interaction);
    } else if (interaction.customId.startsWith('team:')) {
      await handleTeamButton(interaction);
    } else if (interaction.customId.startsWith('chatclear:')) {
      await handleChatClearButton(interaction);
    }
  } catch (error) {
    console.error(`버튼 처리 실패 (${interaction.customId}):`, error);
    const response = {
      content: '버튼을 처리하는 중 문제가 생겼어요. 봇 권한과 역할 순서를 확인해 주세요.',
      flags: MessageFlags.Ephemeral,
    };
    if (interaction.deferred) await interaction.editReply(response.content).catch(() => {});
    else if (interaction.replied) await interaction.followUp(response).catch(() => {});
    else await interaction.reply(response).catch(() => {});
  }
}

function createClient() {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent, GatewayIntentBits.GuildVoiceStates],
  });
  client.once(Events.ClientReady, (readyClient) => console.log(`핑구봇 로그인 완료: ${readyClient.user.tag}`));
  client.on(Events.MessageCreate, handleMessage);
  client.on(Events.InteractionCreate, handleButton);
  client.on(Events.Error, (error) => console.error('Discord 클라이언트 오류:', error));
  return client;
}

async function startBot() {
  const token = process.env.DISCORD_TOKEN;
  if (!token) throw new Error('DISCORD_TOKEN 환경변수가 없습니다. Heroku Config Vars에 등록해 주세요.');
  const client = createClient();
  await client.login(token);
}

if (require.main === module) {
  startBot().catch((error) => {
    console.error('핑구봇 시작 실패:', error.message);
    process.exitCode = 1;
  });
}

module.exports = {
  buildChatClearConfirmation,
  buildHelpEmbed,
  buildMentionContent,
  buildOutingLogEntry,
  buildOutingLogRegistrationEmbed,
  buildOutingPanel,
  buildTeamButtons,
  buildTeamEmbed,
  clearChannelMessages,
  isBotManager,
  shuffleMembers,
  splitIntoTeams,
};

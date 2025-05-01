const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('!핑구봇사용법', { type: 'LISTENING' });
});

client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === '팀') {
    const n = parseInt(args[0]);
    if (isNaN(n) || n < 1) return message.reply('올바른 인원 수를 입력해주세요.');

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('음성 채널에 들어가 주세요.');

    const members = voiceChannel.members.array().filter(member => !member.user.bot && !member.voice.mute);
    if (members.length < n) return message.reply('음성 채널에 인원이 부족합니다.');

    const shuffledMembers = members.sort(() => Math.random() - 0.5);
    const teams = [];
    let restMembers = shuffledMembers.length;

    while (restMembers > 0) {
      const teamSize = Math.min(restMembers, n);
      const teamMembers = shuffledMembers.slice(teams.length * n, teams.length * n + teamSize);
      teams.push(teamMembers.map(member => member.displayName));
      restMembers -= teamSize;
    }

    const selectedTeamIndex = Math.floor(Math.random() * teams.length);
    const selectedTeamName = `${selectedTeamIndex + 1} 팀`;
    const randomMessage = `${selectedTeamName}에 핑구는 배팅한다 생선 ${Math.floor(Math.random() * 71) + 30}개!!!!!!! 쫄리면 포기 하시던지ㅋㅋ`;

    let teamMessage = `**새로운 팀이 구성되었습니다!**\n나와 함께 할 팀은???\n\n`;

    teams.forEach((team, i) => {
      teamMessage += `╭────────── Team ${i + 1} ──────────╮\n`;
      team.forEach(name => {
        teamMessage += `┃ ${name.padEnd(28)}┃\n`;
      });
      teamMessage += `╰────────────────────────────╯\n\n`;
    });

    message.channel.send(teamMessage);
    message.channel.send(randomMessage);
  }

  if (command === '구인구직' || command === '모여라') {
    const maxMembers = 4;

    if (!message.member.voice.channel) {
      return message.reply('먼저 음성 채널에 들어가주세요!');
    }

    const invite = await message.member.voice.channel.createInvite({
      maxAge: 3600,
    });

    const voiceChannelName = message.member.voice.channel.name;
    const currentMembers = message.member.voice.channel.members.size;
    const remainingMembers = Math.max(maxMembers - currentMembers, 0);

    const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#2E86C1', '#2ECC71', '#F1C40F', '#8E44AD'];
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];

    const inviteMessage = new Discord.MessageEmbed()
      .setTitle(`:loud_sound: ${voiceChannelName} 구인구직 합니다!!! \n${remainingMembers}명 구인 구직 중이에요`)
      .setColor(selectedColor)
      .setFooter('해당링크는 1시간 후 자동으로 소멸됩니다.')
      .setTimestamp();

    message.channel.send(inviteMessage);
    message.channel.send(invite.url);
  }

  if (message.content === '!핑구봇도움말') {
    message.channel.send(
      `**구인구직 사용방법!**\n음성채널 입장 후 \`\`!구인구직\`\` 또는 \`\` 입력하면 자동으로 초대링크 생성\n\n` +
      `**팀 짜기 사용방법!**\n음성채널 입장 후 \`\`!팀 N\`\` (N=원하는 명수) 입력 시 음성채널에 있는 인원을 N명만큼 팀 나눠짐\n[마이크 끄기 되어있는 인원은 미포함]`
    );
  }

  // 기타 대화 응답은 동일
  if (message.content === '핑구') message.channel.send('아 왜 바빠죽겠는데 나지금 24시간 돌아가는거 안보임 ???? ㅡㅡ');
  if (message.content === '안녕') message.channel.send('안녕!!!하이 하우알유 땡큐!!!');
  if (message.content === '핑구바보') message.channel.send('핑이님 한테 바보라니...그거 우리끼리 비밀이란 말이에요....');
  if (message.content === '!끝말잇기') message.channel.send('해질녘 ㅋ ');
  if (message.content === '누구없소') message.channel.send('핑구있소');
  if (message.content === '응애') message.channel.send('응애 나 애기 핑구');
  if (message.content === '룰루') message.channel.send('난나!!!');
  if (message.content === '잘자요') message.channel.send('두루가~~~~~~!!!');
  if (message.content === '굿모닝') message.channel.send('핑구는 잠을 안잔다 나약한 닝겐들 ㅋ');
  if (message.content === '사랑해') message.channel.send('미안...난 임자가 있어....');
  if (message.content === '싸우자') message.channel.send('나?나 못이길텐데 ㅋ');
  if (message.content === '핑구야') message.channel.send('핑 바쁨');
  if (message.content === '기달') message.channel.send('기달리는 동안 핑구랑 끝말잇기 ? !끝말잇기 쳐봐 시작함ㅇㅇ');
  if (message.content === 'ㅅㅂ') message.channel.send('ㅅㅂ???????????????마 자신 있나? @here');
  if (message.content === '하') message.channel.send('히흐헹호오오옹');
});

client.login('MTA1Nzk1MzU5OTQ4Njk1MTUwNA.GAz4gP.hRnWtpuaUCkil6AVig8UXYqkcr7WzhLuOQJeTY');

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('!핑구봇명령어', { type: 'LISTENING' });
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

  const shuffledMembers = members.sort(() => Math.random() - 0.5); // 인원을 무작위로 섞음
  const teams = [];
  for (let i = 0; i < Math.ceil(members.length / n); i++) {
    teams.push([]);
  }

  let index = 0;
  shuffledMembers.forEach(member => {
    teams[index].push(member.displayName);
    index = (index + 1) % teams.length;
  });

  const selectedTeamIndex = Math.floor(Math.random() * teams.length);
  const selectedTeamName = `${selectedTeamIndex + 1} 팀`;
  const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#2E86C1', '#2ECC71', '#F1C40F', '#8E44AD'];
  const selectedColor = colors[Math.floor(Math.random() * colors.length)];
  const randomMessage = `${selectedTeamName}에 핑구는 배팅한다 생선 ${Math.floor(Math.random() * 71) + 30}개!!!!!!! 쫄리면 포기 하시던지ㅋㅋ`; 
  const teamEmbed = new Discord.MessageEmbed()
    .setTitle(`새로운 팀이 구성되었습니다!`)
    .setDescription('나와 함께 할 팀은????')
    .setColor(selectedColor)
    .setFooter('')
    .setTimestamp()
    .setImage(message.guild.iconURL());

  teams.forEach((team, i) => {
    teamEmbed.addField(`Team ${i + 1}`, team.join(','));
  });

  message.channel.send(teamEmbed);
  message.channel.send(`@here ${randomMessage}`);
}
  });

  client.login('MTA1Nzk1MzU5OTQ4Njk1MTUwNA.GAz4gP.hRnWtpuaUCkil6AVig8UXYqkcr7WzhLuOQJeTY');

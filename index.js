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

    let teamSize = Math.floor(members.length / n);
    let leftOver = members.length % n;

    const shuffledMembers = members.sort(() => Math.random() - 0.5); // 인원을 무작위로 섞음
    const teams = [];
    for (let i = 0; i < n; i++) {
      let team = [];
      if (leftOver > 0) {
        teamSize = Math.ceil(members.length / n);
        leftOver--;
      }
      for (let j = 0; j < teamSize; j++) {
        team.push(shuffledMembers.shift().displayName);
      }
      teams.push(team);
    }

    const selectedTeamIndex = Math.floor(Math.random() * n);
    const selectedTeamName = `${selectedTeamIndex + 1} 팀`;
    const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#2E86C1', '#2ECC71', '#F1C40F', '#8E44AD'];
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    const randomMessage = `${selectedTeamName}에 핑구는 배팅한다 생선 ${Math.floor(Math.random() * 71) + 30}개!!!!!!! 쫄리면 포기 하시던지ㅋㅋ`; 
    const teamEmbed = new Discord.MessageEmbed()
      .setTitle(`새로운 팀이 구성되었습니다!`)
      .setDescription(`인원 ${n}명, ${teamSize}명씩 한 팀으로 짜기`)
      .setColor(selectedColor)
      .setFooter('')
      .setTimestamp()
      .setImage(message.guild.iconURL());

    teams.forEach((team, i) => {
      const teamNumber = i + 1;
      const teamTitle = `${teamNumber}팀 (${team.length}명)`;
      const teamMembers = team.join(', ');
      teamEmbed.addField(teamTitle, teamMembers);
      if (team.length === 1 && teamNumber !== selectedTeamIndex + 1) {
        teams.splice(i, 1);
      }
    });

    message.channel.send(teamEmbed);
    message.channel.send(`@here ${randomMessage}`);
  }
});




client.login('MTA1Nzk1MzU5OTQ4Njk1MTUwNA.GAz4gP.hRnWtpuaUCkil6AVig8UXYqkcr7WzhLuOQJeTY');

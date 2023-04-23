const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = '!';

const dataFilePath = './data.json';


let money = {};

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



 
    if (message.content === '!초대링크') {
      // 메시지를 보낸 채널이 음성 채널인지 확인
      if (!message.member.voice.channel) {
        return message.reply('먼저 음성 채널에 들어가주세요!');
      }
    
      // 음성 채널의 초대 링크 생성
      const invite = await message.member.voice.channel.createInvite({
        maxAge: 3600, // 초 단위. 1시간 후에 만료됨
      });
    
      // 음성 채널의 이름과 카테고리 정보 가져오기
      const voiceChannelName = message.member.voice.channel.name;
      const voiceChannelCategoryName = message.member.voice.channel.parent ? message.member.voice.channel.parent.name : '';
    
      // 음성 채널의 최대 참가 가능 인원 수와 현재 접속중인 유저 수 계산
      const maxMembers = message.member.voice.channel.userLimit;
      const currentMembers = message.member.voice.channel.members.size;
      const remainingMembers = maxMembers - currentMembers;

      const colors = ['#FF5733', '#C70039', '#900C3F', '#581845', '#2E86C1', '#2ECC71', '#F1C40F', '#8E44AD'];
      const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    
      // 응답 메시지 생성 및 전송
      const inviteMessage = new Discord.MessageEmbed()
        .setTitle(`:loud_sound: ${voiceChannelName} 구인구직 합니다!!! \n  ${remainingMembers}명 구인 구직 중이에요`)
        .setColor(selectedColor)
        .setFooter('해당링크는 1시간후 자동으로 소모 됩니다.')
        .setTimestamp();

        //출력하는 칸
      message.channel.send('@here',inviteMessage);
      message.channel.send(invite.url);
    }

    if (message.content === '!핑구봇명령어') {  // 명령어 사용법
      message.channel.send('ex)"!초대링크" 입력시 구인구직 초대링크 생성 \n "!팀 N" N명 입력시 음성채널에 있는 인원을 N명만큼 팀 생성');
    }

    if (command === '도박') {
      const userId = message.author.id;
      const data = loadData();
  
      // Check if user has data in the file
      if (!data[userId]) {
        data[userId] = { balance: 1000 };
      }
  
      // Flip a coin to determine whether to add or subtract 500 from balance
      const isWin = Math.random() >= 0.5;
      data[userId].balance += isWin ? 500 : -500;
  
      saveData(data);
      message.reply(`도박 결과: ${isWin ? '승리' : '패배'}! 현재 소지금: ${data[userId].balance}`);
    }
  
    // Handle 소지금 command
    if (command === '소지금') {
      const userId = message.author.id;
      const data = loadData();
  
      // Check if user has data in the file
      if (!data[userId]) {
        data[userId] = { balance: 1000 };
      }
  
      message.reply(`현재 소지금: ${data[userId].balance}`);
    }
  });
  
  function loadData() {
    // Load data from file
    try {
      const data = fs.readFileSync(dataFilePath);
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
      return {};
    }
  }
  
  function saveData(data) {
    // Save data to file
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  };

  client.login('MTA1Nzk1MzU5OTQ4Njk1MTUwNA.GAz4gP.hRnWtpuaUCkil6AVig8UXYqkcr7WzhLuOQJeTY');

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
    if (message.content === '핑구') {  //대화
      message.channel.send('아 왜 바빠죽겠는데 나지금 24시간 돌아가는거 안보임 ???? ㅡㅡ');
    }
    if (message.content === '안녕') {  //대화
      message.channel.send('안녕!!!하이 하우알유 땡큐!!!');
    }
    if (message.content === '핑구바보') {
      message.channel.send('핑이님 한테 바보라니...그거 우리끼리 비밀이란 말이에요....');
    }
    if (message.content === '!끝말잇기') {
      message.channel.send('해질녘 ㅋ ');
    }
    if (message.content === '누구없소') {
      message.channel.send('핑구있소');
    }
    if (message.content === '응애') {
      message.channel.send('응애 나 애기 핑구');
    }
    if (message.content === '룰루') {
      message.channel.send('난나!!!');
    }
    if (message.content === '잘자요') {
      message.channel.send('두루가~~~~~~!!!');
    }
    if (message.content === '굿모닝') {
      message.channel.send('핑구는 잠을 안잔다 나약한 닝겐들 ㅋ');
    }
    if (message.content === '사랑해') {
      message.channel.send('미안...난 임자가 있어....');
    }
    if (message.content === '싸우자') {
      message.channel.send('나?나 못이길텐데 ㅋ');
    }
    if (message.content === '핑구야') {
      message.channel.send('핑 바쁨');
    }
    if (message.content === '기달') {
      message.channel.send('기달리는 동안 핑구랑 끝말잇기 ? !끝말잇기 쳐봐 시작함ㅇㅇ');
    }
    if (message.content === 'ㅅㅂ') {
      message.channel.send('ㅅㅂ???????????????마 자신 있나? @here');
    }
    if (message.content === '하') {
      message.channel.send('히흐헹호오오옹');
    }
  
  if (message.author.bot) return;


  if (!money[message.author.id]) {
    money[message.author.id] = 1000;
  }

  // 대출 명령어 처리
  if (message.content === `${prefix}핑구대출좀`) {
    // 소지금이 0원인 경우에만 대출 가능
    if (money[message.author.id] === 0) {
      money[message.author.id] += 500; // 대출금 500원 추가
      message.reply(`핑구님의 돈 500원을 빌려 받았습니다. 이제 소지금은 ${money[message.author.id]}원입니다.`);
    } else {
      message.reply('죄송하지만, 현재 대출 가능한 상태가 아닙니다.');
    }
  }

  // 도박 명령어 처리
  if (message.content === `${prefix}도박`) {
    const gambleResult = Math.random() < 0.5 ? 'win' : 'lose'; // 50% 확률로 승리 또는 패배

    if (gambleResult === 'win') {
      const amount = Math.floor(Math.random() * 500) + 1; // 1~500원 중 랜덤으로 얻은 금액
      money[message.author.id] += amount; // 소지금 추가
      message.reply(` + ${amount}원 | 소지금 : ${money[message.author.id]}원입니다.`);
    } else {
      const amount = Math.floor(Math.random() * 600) + 1; // 1~500원 중 랜덤으로 잃은 금액
      money[message.author.id] -= amount; // 소지금 차감
      message.reply(` - ${amount}원 | 소지금 : ${money[message.author.id]}원입니다.`);
    }
  }

  // 소지금 조회 명령어 처리
  if (message.content === `${prefix}소지금`) {
    message.reply(`현재 소지금은 ${money[message.author.id]}원입니다.`);
  }
  
  
  });

  client.login('MTA1Nzk1MzU5OTQ4Njk1MTUwNA.GAz4gP.hRnWtpuaUCkil6AVig8UXYqkcr7WzhLuOQJeTY');

// 필요한 모듈 import
const Discord = require('discord.js');

// Discord 클라이언트 생성
const client = new Discord.Client();

// 봇이 준비되면 실행되는 이벤트 핸들러
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// '!초대링크' 명령어를 처리하는 이벤트 핸들러
client.on('message', async message => {
  if (message.content === '!초대링크') {
    // 메시지를 보낸 채널이 음성 채널인지 확인
    if (!message.member.voice.channel) {
      return message.reply('먼저 음성 채널에 들어가주세요!');
    }

    // 음성 채널의 초대 링크 생성
    const invite = await message.member.voice.channel.createInvite({
      maxAge: 3600, // 초 단위. 24시간 후에 만료됨
      maxUses: 4 // 한 번만 사용 가능
    });

    // 음성 채널의 이름과 카테고리 정보 가져오기
    const voiceChannelName = message.member.voice.channel.name;
    const voiceChannelCategoryName = message.member.voice.channel.parent ? message.member.voice.channel.parent.name : '';

    // 음성 채널의 최대 참가 가능 인원 수와 현재 접속중인 유저 수 계산
    const maxMembers = message.member.voice.channel.userLimit;
    const currentMembers = message.member.voice.channel.members.size;
    const remainingMembers = maxMembers - currentMembers;

    // 응답 메시지 생성 및 전송
    const inviteMessage = `@here ${voiceChannelName} 에서    ${remainingMembers} 자리  채워주실분 구합니다!!\n초대 링크: ${invite.url}`;
    message.channel.send(inviteMessage);
  }

  if (message.content === '!핑구봇명령어') {  // 명령어 사용법
    message.channel.send('ex) #일A,B // #경A,B // !일A,B // !경A,B  #은 1인칭(FPP) !는 3인칭(TPP) ');
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
    message.channel.send('해질녘');
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
    message.channel.send('ㅅㅂ??????????????????????? @here');
  }
  if (message.content === '하') {
    message.channel.send('히흐헹호오오옹');
  }
});

  client.login('MTA1Nzk1MzU5OTQ4Njk1MTUwNA.GAz4gP.hRnWtpuaUCkil6AVig8UXYqkcr7WzhLuOQJeTY');

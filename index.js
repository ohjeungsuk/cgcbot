const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!핑구봇명령어') {  // 명령어 사용법
    msg.channel.send('ex) #일A,B // #경A,B // !일A,B // !경A,B  #은 1인칭(FPP) !는 3인칭(TPP) ');
  }
  if (msg.content === '핑구') {  //대화
    msg.channel.send('아 왜 바빠죽겠는데 나지금 24시간 돌아가는거 안보임 ???? ㅡㅡ');
  }
  if (msg.content === '안녕') {  //대화
    msg.channel.send('안녕!!!하이 하우알유 땡큐!!!');
  }
  if (msg.content === '핑구바보') {
    msg.channel.send('핑이님 한테 바보라니...그거 우리끼리 비밀이란 말이에요....');
  }
  if (msg.content === '!끝말잇기') {
    msg.channel.send('해질녘');
  }
  if (msg.content === '누구없소') {
    msg.channel.send('핑구있소');
  }
  if (msg.content === '응애') {
    msg.channel.send('응애 나 애기 핑구');
  }
  if (msg.content === '룰루') {
    msg.channel.send('난나!!!');
  }
  if (msg.content === '잘자요') {
    msg.channel.send('두루가~~~~~~!!!');
  }
  if (msg.content === '굿모닝') {
    msg.channel.send('핑구는 잠을 안잔다 나약한 닝겐들 ㅋ');
  }
  if (msg.content === '사랑해') {
    msg.channel.send('미안...난 임자가 있어....');
  }
  if (msg.content === '싸우자') {
    msg.channel.send('나?나 못이길텐데 ㅋ');
  }
  if (msg.content === '핑구야') {
    msg.channel.send('핑 바쁨');
  }
  if (msg.content === '기달') {
    msg.channel.send('기달리는 동안 핑구랑 끝말잇기 ? !끝말잇기 쳐봐 시작함ㅇㅇ');
  }
  if (msg.content === 'ㅅㅂ') {
    msg.channel.send('ㅅㅂ??????????????????????? @here');
  }
  if (msg.content === '하') {
    msg.channel.send('히흐헹호오오옹');
  }
  if (msg.content === '#일1,1') {
    msg.channel.send('@here  🌻 1인칭 1번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일1,2') {
    msg.channel.send('@here  🌻 1인칭 1번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일1,3') {
    msg.channel.send('@here  🌻 1인칭 1번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일2,1') {
    msg.channel.send('@here  🌻 1인칭 2번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일2,2') {
    msg.channel.send('@here  🌻 1인칭 2번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일2,3') {
    msg.channel.send('@here  🌻 1인칭 2번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일3,1') {
    msg.channel.send('@here  🌻1인칭 3번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일3,2') {
    msg.channel.send('@here  🌻1인칭 3번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일3,3') {
    msg.channel.send('@here  🌻1인칭 3번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일4,1') {
    msg.channel.send('@here  🌻1인칭 4번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일4,2') {
    msg.channel.send('@here  🌻1인칭 4번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일4,3') {
    msg.channel.send('@here  🌻1인칭 4번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일5,1') {
    msg.channel.send('@here  🌻 1인칭 5번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일5,2') {
    msg.channel.send('@here  🌻 1인칭 5번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일5,3') {
    msg.channel.send('@here  🌻 1인칭 5번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일6,1') {
    msg.channel.send('@here  🌻 1인칭 6번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일6,2') {
    msg.channel.send('@here  🌻 1인칭 6번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일6,3') {
    msg.channel.send('@here  🌻 1인칭 6번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일7,1') {
    msg.channel.send('@here  🌻1인칭 7번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일7,2') {
    msg.channel.send('@here  🌻1인칭 7번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일7,3') {
    msg.channel.send('@here  🌻1인칭 7번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일8,1') {
    msg.channel.send('@here  🌻1인칭 8번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일8,2') {
    msg.channel.send('@here  🌻1인칭 8번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일8,3') {
    msg.channel.send('@here  🌻1인칭 8번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일9,1') {
    msg.channel.send('@here  🌻 1인칭 9번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일9,2') {
    msg.channel.send('@here  🌻 1인칭 9번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일9,3') {
    msg.channel.send('@here  🌻 1인칭 9번방 3자리 채워주실분~🌻');
  }
  if (msg.content === '#일10,1') {
    msg.channel.send('@here  🌻 1인칭 10번방 1자리 채워주실분~🌻');
  }
  if (msg.content === '#일10,2') {
    msg.channel.send('@here  🌻 1인칭 10번방 2자리 채워주실분~🌻');
  }
  if (msg.content === '#일10,3') {
    msg.channel.send('@here  🌻 1인칭 10번방 3자리 채워주실분~🌻');
  }             //  FPP 10번방 까지 끝

  if (msg.content === '#경1,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 1번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경1,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 1번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경1,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 1번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경2,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 2번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경2,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 2번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경2,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 2번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경3,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 3번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경3,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 3번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경3,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 3번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경4,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 4번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경4,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 4번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경4,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 4번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경5,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 5번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경5,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 5번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경5,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 5번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경6,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 6번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경6,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 6번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경6,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 6번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경7,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 7번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경7,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 7번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경7,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 7번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경8,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 8번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경8,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 8번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경8,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 8번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경9,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 9번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경9,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 9번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경9,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 9번방 3자리 채워주실분~💥');
  }
  if (msg.content === '#경10,1') {
    msg.channel.send('@here  💥 1인칭  경쟁 10번방 1자리 채워주실분~💥');
  }
  if (msg.content === '#경10,2') {
    msg.channel.send('@here  💥 1인칭  경쟁 10번방 2자리 채워주실분~💥');
  }
  if (msg.content === '#경10,3') {
    msg.channel.send('@here  💥 1인칭  경쟁 10번방 3자리 채워주실분~💥');
  }   // FPP 경쟁 10번 까지 끝

  if (msg.content === '!일1,1') {
    msg.channel.send('@here  🌼   일반 1번방 1자리 채워주실분~🌼 \ https://discord.gg/MeXqvGFTb8');
  }
  if (msg.content === '!일1,2') {
    msg.channel.send('@here  🌼   일반 1번방 2자리 채워주실분~🌼 \ https://discord.gg/MeXqvGFTb8');
  }
  if (msg.content === '!일1,3') {
    msg.channel.send('@here  🌼   일반 1번방 3자리 채워주실분~🌼 \ https://discord.gg/MeXqvGFTb8');
  }
  if (msg.content === '!일2,1') {
    msg.channel.send('@here  🌼   일반 2번방 1자리 채워주실분~🌼 \ https://discord.gg/KkqU6TXaYM');
  }
  if (msg.content === '!일2,2') {
    msg.channel.send('@here  🌼   일반 2번방 2자리 채워주실분~🌼 \ https://discord.gg/KkqU6TXaYM');
  }
  if (msg.content === '!일2,3') {
    msg.channel.send('@here  🌼   일반 2번방 3자리 채워주실분~🌼 \ https://discord.gg/KkqU6TXaYM');
  }
  if (msg.content === '!일3,1') {
    msg.channel.send('@here  🌼   일반 3번방 1자리 채워주실분~🌼 \ https://discord.gg/XefMW7yfj4');
  }
  if (msg.content === '!일3,2') {
    msg.channel.send('@here  🌼   일반 3번방 2자리 채워주실분~🌼 \ https://discord.gg/XefMW7yfj4');
  }
  if (msg.content === '!일3,3') {
    msg.channel.send('@here  🌼   일반 3번방 3자리 채워주실분~🌼 \ https://discord.gg/XefMW7yfj4');
  }
  if (msg.content === '!일4,1') {
    msg.channel.send('@here  🌼   일반 4번방 1자리 채워주실분~🌼 \ https://discord.gg/U4auwgMDvu');
  }
  if (msg.content === '!일4,2') {
    msg.channel.send('@here  🌼   일반 4번방 2자리 채워주실분~🌼 \ https://discord.gg/U4auwgMDvu');
  }
  if (msg.content === '!일4,3') {
    msg.channel.send('@here  🌼   일반 4번방 3자리 채워주실분~🌼 \ https://discord.gg/U4auwgMDvu');
  }
  if (msg.content === '!일5,1') {
    msg.channel.send('@here  🌼   일반 5번방 1자리 채워주실분~🌼 \ https://discord.gg/9A4NVNN9Au ');
  }
  if (msg.content === '!일5,2') {
    msg.channel.send('@here  🌼   일반 5번방 2자리 채워주실분~🌼 \ https://discord.gg/9A4NVNN9Au');
  }
  if (msg.content === '!일5,3') {
    msg.channel.send('@here  🌼   일반 5번방 3자리 채워주실분~🌼 \ https://discord.gg/9A4NVNN9Au');
  }
  if (msg.content === '!일6,1') {
    msg.channel.send('@here  🌼   일반 6번방 1자리 채워주실분~🌼 \ https://discord.gg/QMJTZU7CJz');
  }
  if (msg.content === '!일6,2') {
    msg.channel.send('@here  🌼   일반 6번방 2자리 채워주실분~🌼 \ https://discord.gg/QMJTZU7CJz');
  }
  if (msg.content === '!일6,3') {
    msg.channel.send('@here  🌼   일반 6번방 3자리 채워주실분~🌼 \ https://discord.gg/QMJTZU7CJz');
  }
  if (msg.content === '!일7,1') {
    msg.channel.send('@here  🌼   일반 7번방 1자리 채워주실분~🌼 \ https://discord.gg/ruAxDzrvpe ');
  }
  if (msg.content === '!일7,2') {
    msg.channel.send('@here  🌼   일반 7번방 2자리 채워주실분~🌼 \ https://discord.gg/ruAxDzrvpe');
  }
  if (msg.content === '!일7,3') {
    msg.channel.send('@here  🌼   일반 7번방 3자리 채워주실분~🌼 \ https://discord.gg/ruAxDzrvpe');
  }
  if (msg.content === '!카1') {  //카카오
    msg.channel.send('@here  🤞    카카오 1자리 채워주실분~🤞 \ https://discord.gg/k4dgXXEYDd');
  }
  if (msg.content === '!카2') {
    msg.channel.send('@here  🤞   카카오 2자리 채워주실분~🤞 \ https://discord.gg/k4dgXXEYDd');
  }
  if (msg.content === '!카3') {
    msg.channel.send('@here  🤞   카카오 3자리 채워주실분~🤞 \ https://discord.gg/k4dgXXEYDd');
  }
  // if (msg.content === '!일8,1') {
  //   msg.channel.send('@here  🌼   일반 8번방 1자리 채워주실분~🌼 \ ');
  // }
  // if (msg.content === '!일8,2') {
  //   msg.channel.send('@here  🌼   일반 8번방 2자리 채워주실분~🌼');
  // }
  // if (msg.content === '!일8,3') {
  //   msg.channel.send('@here  🌼   일반 8번방 3자리 채워주실분~🌼');
  // }
  // if (msg.content === '!일9,1') {
  //   msg.channel.send('@here  🌼   일반 9번방 1자리 채워주실분~🌼');
  // }
  // if (msg.content === '!일9,2') {
  //   msg.channel.send('@here  🌼   일반 9번방 2자리 채워주실분~🌼');
  // }
  // if (msg.content === '!일9,3') {
  //   msg.channel.send('@here  🌼   일반 9번방 3자리 채워주실분~🌼');
  // }
  // if (msg.content === '!일10,1') {
  //   msg.channel.send('@here  🌼   일반 10번방 1자리 채워주실분~🌼');
  // }
  // if (msg.content === '!일10,2') {
  //   msg.channel.send('@here  🌼   일반 10번방 2자리 채워주실분~🌼');
  // }
  // if (msg.content === '!일10,3') {
  //   msg.channel.send('@here  🌼   일반 10번방 3자리 채워주실분~🌼');
  // }
  if (msg.content === '!경1,1') {
    msg.channel.send('@here  🔥   경쟁 1번방 1자리 채워주실분~🔥 \ https://discord.gg/ypbDEH5jJw ');
  }
  if (msg.content === '!경1,2') {
    msg.channel.send('@here  🔥   경쟁 1번방 2자리 채워주실분~🔥 \ https://discord.gg/ypbDEH5jJw');
  }
  if (msg.content === '!경1,3') {
    msg.channel.send('@here  🔥   경쟁 1번방 3자리 채워주실분~🔥 \ https://discord.gg/ypbDEH5jJw');
  }
  if (msg.content === '!경2,1') {
    msg.channel.send('@here  🔥   경쟁 2번방 1자리 채워주실분~🔥\ https://discord.gg/pfRUmQve9g ');
  }
  if (msg.content === '!경2,2') {
    msg.channel.send('@here  🔥   경쟁 2번방 2자리 채워주실분~🔥 \ https://discord.gg/pfRUmQve9g');
  }
  if (msg.content === '!경2,3') {
    msg.channel.send('@here  🔥   경쟁 2번방 3자리 채워주실분~🔥 \ https://discord.gg/pfRUmQve9g');
  }
  if (msg.content === '!경3,1') {
    msg.channel.send('@here  🔥   경쟁 3번방 1자리 채워주실분~🔥 \ https://discord.gg/JdaX394WeQ');
  }
  if (msg.content === '!경3,2') {
    msg.channel.send('@here  🔥   경쟁 3번방 2자리 채워주실분~🔥 \ https://discord.gg/JdaX394WeQ');
  }
  if (msg.content === '!경3,3') {
    msg.channel.send('@here  🔥   경쟁 3번방 3자리 채워주실분~🔥 \ https://discord.gg/JdaX394WeQ');
  }
  if (msg.content === '!경4,1') {
    msg.channel.send('@here  🔥   경쟁 4번방 1자리 채워주실분~🔥 \ https://discord.gg/xRECek4qep');
  }
  if (msg.content === '!경4,2') {
    msg.channel.send('@here  🔥   경쟁 4번방 2자리 채워주실분~🔥 \ https://discord.gg/xRECek4qep');
  }
  if (msg.content === '!경4,3') {
    msg.channel.send('@here  🔥   경쟁 4번방 3자리 채워주실분~🔥 \ https://discord.gg/xRECek4qep');
  }
  if (msg.content === '!경5,1') {
    msg.channel.send('@here  🔥   경쟁 5번방 1자리 채워주실분~🔥 \ https://discord.gg/YsXhnUE558');
  }
  if (msg.content === '!경5,2') {
    msg.channel.send('@here  🔥   경쟁 5번방 2자리 채워주실분~🔥 \ https://discord.gg/YsXhnUE558');
  }
  if (msg.content === '!경5,3') {
    msg.channel.send('@here  🔥   경쟁 5번방 3자리 채워주실분~🔥 \ https://discord.gg/YsXhnUE558');
  }
  if (msg.content === '!경6,1') {
    msg.channel.send('@here  🔥   경쟁 6번방 1자리 채워주실분~🔥 \ https://discord.gg/84vQDXtnWk');
  }
  if (msg.content === '!경6,2') {
    msg.channel.send('@here  🔥   경쟁 6번방 2자리 채워주실분~🔥 \ https://discord.gg/84vQDXtnWk');
  }
  if (msg.content === '!경6,3') {
    msg.channel.send('@here  🔥   경쟁 6번방 3자리 채워주실분~🔥 \ https://discord.gg/84vQDXtnWk');
  }
  if (msg.content === '!경7,1') {
    msg.channel.send('@here  🔥   경쟁 7번방 1자리 채워주실분~🔥 \ https://discord.gg/PnzDDzZTRw');
  }
  if (msg.content === '!경7,2') {
    msg.channel.send('@here  🔥   경쟁 7번방 2자리 채워주실분~🔥 \ https://discord.gg/PnzDDzZTRw');
  }
  if (msg.content === '!경7,3') {
    msg.channel.send('@here  🔥   경쟁 7번방 3자리 채워주실분~🔥 \ https://discord.gg/PnzDDzZTRw');
  }
  if (msg.content === '!경8,1') {
    msg.channel.send('@here  🔥   경쟁 8번방 1자리 채워주실분~🔥 \ https://discord.gg/VudnwCTH8m ');
  }
  if (msg.content === '!경8,2') {
    msg.channel.send('@here  🔥   경쟁 8번방 2자리 채워주실분~🔥 \ https://discord.gg/VudnwCTH8m');
  }
  if (msg.content === '!경8,3') {
    msg.channel.send('@here  🔥   경쟁 8번방 3자리 채워주실분~🔥 \ https://discord.gg/VudnwCTH8m');
  }
  if (msg.content === '!경9,1') {
    msg.channel.send('@here  🔥   경쟁 9번방 1자리 채워주실분~🔥 \ https://discord.gg/mMnG4MHZnz');
  }
  if (msg.content === '!경9,2') {
    msg.channel.send('@here  🔥   경쟁 9번방 2자리 채워주실분~🔥 \ https://discord.gg/mMnG4MHZnz');
  }
  if (msg.content === '!경9,3') {
    msg.channel.send('@here  🔥   경쟁 9번방 3자리 채워주실분~🔥 \ https://discord.gg/mMnG4MHZnz');
  }
  if (msg.content === '!경10,1') {
    msg.channel.send('@here  🔥   경쟁 10번방 1자리 채워주실분~🔥 \ https://discord.gg/JSK2N3ehdZ');
  }
  if (msg.content === '!경10,2') {
    msg.channel.send('@here  🔥   경쟁 10번방 2자리 채워주실분~🔥 \ https://discord.gg/JSK2N3ehdZ');
  }
  if (msg.content === '!경10,3') {
    msg.channel.send('@here  🔥   경쟁 10번방 3자리 채워주실분~🔥 \ https://discord.gg/JSK2N3ehdZ');
  }
  if (msg.content === '!경11,1') {
    msg.channel.send('@here  🔥   경쟁 11번방 1자리 채워주실분~🔥 \ https://discord.gg/9g4Ygew76D');
  }
  if (msg.content === '!경11,2') {
    msg.channel.send('@here  🔥   경쟁 11번방 2자리 채워주실분~🔥 \ https://discord.gg/9g4Ygew76D');
  }
  if (msg.content === '!경11,3') {
    msg.channel.send('@here  🔥   경쟁 11번방 3자리 채워주실분~🔥 \ https://discord.gg/9g4Ygew76D');
  }
  if (msg.content === '!경12,1') {
    msg.channel.send('@here  🔥   경쟁 12번방 1자리 채워주실분~🔥 \ https://discord.gg/BjWjyHb9RM');
  }
  if (msg.content === '!경12,2') {
    msg.channel.send('@here  🔥   경쟁 12번방 2자리 채워주실분~🔥 \ https://discord.gg/BjWjyHb9RM');
  }
  if (msg.content === '!경12,3') {
    msg.channel.send('@here  🔥   경쟁 12번방 3자리 채워주실분~🔥 \ https://discord.gg/BjWjyHb9RM');
  }
  if (msg.content === '!경13,1') {
    msg.channel.send('@here  🔥   경쟁 13번방 1자리 채워주실분~🔥 \ https://discord.gg/qyrmQEuDrw');
  }
  if (msg.content === '!경13,2') {
    msg.channel.send('@here  🔥   경쟁 13번방 2자리 채워주실분~🔥 \ https://discord.gg/qyrmQEuDrw');
  }
  if (msg.content === '!경13,3') {
    msg.channel.send('@here  🔥   경쟁 13번방 3자리 채워주실분~🔥 \ https://discord.gg/qyrmQEuDrw');
  }
  if (msg.content === '!경14,1') {
    msg.channel.send('@here  🔥   경쟁 14번방 1자리 채워주실분~🔥 \ https://discord.gg/EcZrRn6Pdz');
  }
  if (msg.content === '!경14,2') {
    msg.channel.send('@here  🔥   경쟁 14번방 2자리 채워주실분~🔥 \ https://discord.gg/EcZrRn6Pdz');
  }
  if (msg.content === '!경14,3') {
    msg.channel.send('@here  🔥   경쟁 14번방 3자리 채워주실분~🔥 \ https://discord.gg/EcZrRn6Pdz');
  }
  if (msg.content === '!경15,1') {
    msg.channel.send('@here  🔥   경쟁 15번방 1자리 채워주실분~🔥 \ https://discord.gg/XeZNRfVhnP');
  }
  if (msg.content === '!경15,2') {
    msg.channel.send('@here  🔥   경쟁 15번방 2자리 채워주실분~🔥 \ https://discord.gg/XeZNRfVhnP');
  }
  if (msg.content === '!경15,3') {
    msg.channel.send('@here  🔥   경쟁 15번방 3자리 채워주실분~🔥 \ https://discord.gg/XeZNRfVhnP');
  }
  //라이브
  if (msg.content === '!라일1,1') {
    msg.channel.send('@here   🎬   라이브 일반 1번방 1자리 채워주실분~🎬 \ https://discord.gg/X6fUDeb3H9');
  }
  if (msg.content === '!라일1,2') {
    msg.channel.send('@here   🎬   라이브 일반 1번방 2자리 채워주실분~🎬 \ https://discord.gg/X6fUDeb3H9');
  }
  if (msg.content === '!라일1,3') {
    msg.channel.send('@here   🎬   라이브 일반 1번방 3자리 채워주실분~🎬 \ https://discord.gg/X6fUDeb3H9');
  }
  if (msg.content === '!라일2,1') {
    msg.channel.send('@here   🎬   라이브 일반 2번방 1자리 채워주실분~🎬 \ https://discord.gg/YmhXmnnXwg');
  }
  if (msg.content === '!라일2,2') {
    msg.channel.send('@here   🎬   라이브 일반 2번방 2자리 채워주실분~🎬 \ https://discord.gg/YmhXmnnXwg');
  }
  if (msg.content === '!라일2,3') {
    msg.channel.send('@here   🎬   라이브 일반 2번방 3자리 채워주실분~🎬 \ https://discord.gg/YmhXmnnXwg');
  }
  if (msg.content === '!라일3,1') {
    msg.channel.send('@here   🎬   라이브 일반 3번방 1자리 채워주실분~🎬 \ https://discord.gg/2rdPpS3eUr');
  }
  if (msg.content === '!라일3,2') {
    msg.channel.send('@here   🎬   라이브 일반 3번방 2자리 채워주실분~🎬 \ https://discord.gg/2rdPpS3eUr');
  }
  if (msg.content === '!라일3,3') {
    msg.channel.send('@here   🎬   라이브 일반 3번방 3자리 채워주실분~🎬 \ https://discord.gg/2rdPpS3eUr');
  }
  //라이브 경쟁
  if (msg.content === '!라경1,1') {
    msg.channel.send('@here   🍿   라이브 경쟁 1번방 1자리 채워주실분~🍿  \ https://discord.gg/X6fUDeb3H9');
  }
  if (msg.content === '!라경1,2') {
    msg.channel.send('@here   🍿   라이브 경쟁 1번방 2자리 채워주실분~🍿  \ https://discord.gg/X6fUDeb3H9');
  }
  if (msg.content === '!라경1,3') {
    msg.channel.send('@here   🍿   라이브 경쟁 1번방 3자리 채워주실분~🍿  \ https://discord.gg/X6fUDeb3H9');
  }
  if (msg.content === '!라경2,1') {
    msg.channel.send('@here   🍿   라이브 경쟁 2번방 1자리 채워주실분~🍿 \ https://discord.gg/YmhXmnnXwg');
  }
  if (msg.content === '!라경2,2') {
    msg.channel.send('@here   🍿   라이브 경쟁 2번방 2자리 채워주실분~🍿 \ https://discord.gg/YmhXmnnXwg');
  }
  if (msg.content === '!라경2,3') {
    msg.channel.send('@here   🍿   라이브 경쟁 2번방 3자리 채워주실분~🍿 \ https://discord.gg/YmhXmnnXwg');
  }
  if (msg.content === '!라경3,1') {
    msg.channel.send('@here   🍿   라이브 경쟁 3번방 1자리 채워주실분~🍿 \ https://discord.gg/2rdPpS3eUr');
  }
  if (msg.content === '!라경3,2') {
    msg.channel.send('@here   🍿   라이브 경쟁 3번방 2자리 채워주실분~🍿 \ https://discord.gg/2rdPpS3eUr');
  }
  if (msg.content === '!라경3,3') {
    msg.channel.send('@here   🍿   라이브 경쟁 3번방 3자리 채워주실분~🍿 \ https://discord.gg/2rdPpS3eUr');
  }
  //게스트 일반
  if (msg.content === '!게일1,1') {
    msg.channel.send('@here   🕹️   게스트 일반 1번방 1자리 채워주실분~🕹️ \ https://discord.gg/x3cMJMm99g ');
  }
  if (msg.content === '!게일1,2') {
    msg.channel.send('@here   🕹️   게스트 일반 1번방 2자리 채워주실분~🕹️ \ https://discord.gg/x3cMJMm99g ');
  }
  if (msg.content === '!게일1,3') {
    msg.channel.send('@here   🕹️   게스트 일반 1번방 3자리 채워주실분~🕹️ \ https://discord.gg/x3cMJMm99g ');
  }
  if (msg.content === '!게일2,1') {
    msg.channel.send('@here   🕹️   게스트 일반 2번방 1자리 채워주실분~🕹️ \ https://discord.gg/sFQB6A9SqA ');
  }
  if (msg.content === '!게일2,2') {
    msg.channel.send('@here   🕹️   게스트 일반 2번방 2자리 채워주실분~🕹️ \ https://discord.gg/sFQB6A9SqA ');
  }
  if (msg.content === '!게일2,3') {
    msg.channel.send('@here   🕹️   게스트 일반 2번방 3자리 채워주실분~🕹️ \ https://discord.gg/sFQB6A9SqA ');
  }
  if (msg.content === '!게일3,1') {
    msg.channel.send('@here   🕹️   게스트 일반 3번방 1자리 채워주실분~🕹️ \ https://discord.gg/DJa7G2mcJv ');
  }
  if (msg.content === '!게일3,2') {
    msg.channel.send('@here   🕹️   게스트 일반 3번방 2자리 채워주실분~🕹️ \ https://discord.gg/DJa7G2mcJv ');
  }
  if (msg.content === '!게일3,3') {
    msg.channel.send('@here   🕹️   게스트 일반 3번방 3자리 채워주실분~🕹️ \ https://discord.gg/DJa7G2mcJv ');
  }
  //게스트 경쟁
  if (msg.content === '!게경1,1') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 1번방 1자리 채워주실분~⚔️ \ https://discord.gg/x3cMJMm99g ');
  }
  if (msg.content === '!게경1,2') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 1번방 2자리 채워주실분~⚔️ \ https://discord.gg/x3cMJMm99g ');
  }
  if (msg.content === '!게경1,3') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 1번방 3자리 채워주실분~⚔️ \ https://discord.gg/x3cMJMm99g ');
  }
  if (msg.content === '!게경2,1') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 2번방 1자리 채워주실분~⚔️ \ https://discord.gg/sFQB6A9SqA ');
  }
  if (msg.content === '!게경2,2') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 2번방 2자리 채워주실분~⚔️ \ https://discord.gg/sFQB6A9SqA ');
  }
  if (msg.content === '!게경2,3') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 2번방 3자리 채워주실분~⚔️ \ https://discord.gg/sFQB6A9SqA ');
  }
  if (msg.content === '!게경3,1') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 3번방 1자리 채워주실분~⚔️ \ https://discord.gg/DJa7G2mcJv ');
  }
  if (msg.content === '!게경3,2') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 3번방 2자리 채워주실분~⚔️ \ https://discord.gg/DJa7G2mcJv ');
  }
  if (msg.content === '!게경3,3') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 3번방 3자리 채워주실분~⚔️ \ https://discord.gg/DJa7G2mcJv ');
  }



});

  client.login('MTA1Nzk1MzU5OTQ4Njk1MTUwNA.GAz4gP.hRnWtpuaUCkil6AVig8UXYqkcr7WzhLuOQJeTY');

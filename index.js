const express = require('express');
const app = express();
const port = 5000


app.get('/', (req, res) => res.send('BOT START!!'))

app.listen(port, () =>
  console.log('START')
);

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
    msg.channel.send('저....저요...?아닙말구여.....');
  }
  if (msg.content === '안녕') {  //대화
    msg.channel.send('안녕!!!!!!!!! 안녕!!!!!!!!!!');
  }
  if (msg.content === '핑구바보') {
    msg.channel.send('ㅡㅡ?저한테 그러시는거에요 핑이님한테 하는거에요??');
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
  if (msg.content === '사랑해') {
    msg.channel.send('미안...난 임자가 있어....');
  }
  if (msg.content === '싸우자') {
    msg.channel.send('나?나 못이길텐데 ');
  }
  if (msg.content === '바보') {
    msg.channel.send('지금 나한테 바보라고 한거임? ㅡㅡ?');
  }
  if (msg.content === '안녕하세요') {
    msg.channel.send('안녕하세요 반갑습니다!!!핑구에요!!!!!>W<');
  }
  if (msg.content === '헉') {
    msg.channel.send('왜 왜왜오애ㅗ애왜왱 무슨일야??');
  }
  if (msg.content === '핑구야') {
    msg.channel.send('핑 바쁨 구인구직 해주느라 힘들어 죽겠네 하....프로그램인게 내 팔자지...');
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
    msg.channel.send('@here  🌼   일반 1번방 1자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/856212399936897071 ');
  }
  if (msg.content === '!일1,2') {
    msg.channel.send('@here  🌼   일반 1번방 2자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/856212399936897071');
  }
  if (msg.content === '!일1,3') {
    msg.channel.send('@here  🌼   일반 1번방 3자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/856212399936897071');
  }
  if (msg.content === '!일2,1') {
    msg.channel.send('@here  🌼   일반 2번방 1자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394264708784179 ');
  }
  if (msg.content === '!일2,2') {
    msg.channel.send('@here  🌼   일반 2번방 2자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394264708784179');
  }
  if (msg.content === '!일2,3') {
    msg.channel.send('@here  🌼   일반 2번방 3자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394264708784179');
  }
  if (msg.content === '!일3,1') {
    msg.channel.send('@here  🌼   일반 3번방 1자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394299022381136');
  }
  if (msg.content === '!일3,2') {
    msg.channel.send('@here  🌼   일반 3번방 2자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394299022381136');
  }
  if (msg.content === '!일3,3') {
    msg.channel.send('@here  🌼   일반 3번방 3자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394299022381136');
  }
  if (msg.content === '!일4,1') {
    msg.channel.send('@here  🌼   일반 4번방 1자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394232056131696');
  }
  if (msg.content === '!일4,2') {
    msg.channel.send('@here  🌼   일반 4번방 2자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394232056131696');
  }
  if (msg.content === '!일4,3') {
    msg.channel.send('@here  🌼   일반 4번방 3자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/1028394232056131696');
  }
  if (msg.content === '!일5,1') {
    msg.channel.send('@here  🌼   일반 5번방 1자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/983343600605728789 ');
  }
  if (msg.content === '!일5,2') {
    msg.channel.send('@here  🌼   일반 5번방 2자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/983343600605728789');
  }
  if (msg.content === '!일5,3') {
    msg.channel.send('@here  🌼   일반 5번방 3자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/983343600605728789');
  }
  if (msg.content === '!일6,1') {
    msg.channel.send('@here  🌼   일반 6번방 1자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/877179731815063653');
  }
  if (msg.content === '!일6,2') {
    msg.channel.send('@here  🌼   일반 6번방 2자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/877179731815063653');
  }
  if (msg.content === '!일6,3') {
    msg.channel.send('@here  🌼   일반 6번방 3자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/877179731815063653');
  }
  if (msg.content === '!일7,1') {
    msg.channel.send('@here  🌼   일반 7번방 1자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/983343691454365746 ');
  }
  if (msg.content === '!일7,2') {
    msg.channel.send('@here  🌼   일반 7번방 2자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/983343691454365746');
  }
  if (msg.content === '!일7,3') {
    msg.channel.send('@here  🌼   일반 7번방 3자리 채워주실분~🌼 \ https://discord.com/channels/618395850275553300/983343691454365746');
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
    msg.channel.send('@here  🔥   경쟁 1번방 1자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028394860077654117 ');
  }
  if (msg.content === '!경1,2') {
    msg.channel.send('@here  🔥   경쟁 1번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028394860077654117');
  }
  if (msg.content === '!경1,3') {
    msg.channel.send('@here  🔥   경쟁 1번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028394860077654117');
  }
  if (msg.content === '!경2,1') {
    msg.channel.send('@here  🔥   경쟁 2번방 1자리 채워주실분~🔥\ https://discord.com/channels/618395850275553300/1028394688757108746 ');
  }
  if (msg.content === '!경2,2') {
    msg.channel.send('@here  🔥   경쟁 2번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028394688757108746');
  }
  if (msg.content === '!경2,3') {
    msg.channel.send('@here  🔥   경쟁 2번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028394688757108746');
  }
  if (msg.content === '!경3,1') {
    msg.channel.send('@here  🔥   경쟁 3번방 1자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/878273629186564127');
  }
  if (msg.content === '!경3,2') {
    msg.channel.send('@here  🔥   경쟁 3번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/878273629186564127');
  }
  if (msg.content === '!경3,3') {
    msg.channel.send('@here  🔥   경쟁 3번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/878273629186564127');
  }
  if (msg.content === '!경4,1') {
    msg.channel.send('@here  🔥   경쟁 4번방 1자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028401145728729190');
  }
  if (msg.content === '!경4,2') {
    msg.channel.send('@here  🔥   경쟁 4번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028401145728729190');
  }
  if (msg.content === '!경4,3') {
    msg.channel.send('@here  🔥   경쟁 4번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028401145728729190');
  }
  if (msg.content === '!경5,1') {
    msg.channel.send('@here  🔥   경쟁 5번방 1자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/862301298192154624');
  }
  if (msg.content === '!경5,2') {
    msg.channel.send('@here  🔥   경쟁 5번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/862301298192154624');
  }
  if (msg.content === '!경5,3') {
    msg.channel.send('@here  🔥   경쟁 5번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/862301298192154624');
  }
  if (msg.content === '!경6,1') {
    msg.channel.send('@here  🔥   경쟁 6번방 1자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/874286693090480179 ');
  }
  if (msg.content === '!경6,2') {
    msg.channel.send('@here  🔥   경쟁 6번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/874286693090480179');
  }
  if (msg.content === '!경6,3') {
    msg.channel.send('@here  🔥   경쟁 6번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/874286693090480179');
  }
  if (msg.content === '!경7,1') {
    msg.channel.send('@here  🔥   경쟁 7번방 1자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/862301417045622794');
  }
  if (msg.content === '!경7,2') {
    msg.channel.send('@here  🔥   경쟁 7번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/862301417045622794');
  }
  if (msg.content === '!경7,3') {
    msg.channel.send('@here  🔥   경쟁 7번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/862301417045622794');
  }
  if (msg.content === '!경8,1') {
    msg.channel.send('@here  🔥   경쟁 8번방 1자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/981192348400754778 ');
  }
  if (msg.content === '!경8,2') {
    msg.channel.send('@here  🔥   경쟁 8번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/981192348400754778');
  }
  if (msg.content === '!경8,3') {
    msg.channel.send('@here  🔥   경쟁 8번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/981192348400754778');
  }
  if (msg.content === '!경9,1') {
    msg.channel.send('@here  🔥   경쟁 9번방 1자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028394981607624755');
  }
  if (msg.content === '!경9,2') {
    msg.channel.send('@here  🔥   경쟁 9번방 2자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028394981607624755');
  }
  if (msg.content === '!경9,3') {
    msg.channel.send('@here  🔥   경쟁 9번방 3자리 채워주실분~🔥 \ https://discord.com/channels/618395850275553300/1028394981607624755');
  }
  // if (msg.content === '!경10,1') {
  //   msg.channel.send('@here  🔥   경쟁 10번방 1자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경10,2') {
  //   msg.channel.send('@here  🔥   경쟁 10번방 2자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경10,3') {
  //   msg.channel.send('@here  🔥   경쟁 10번방 3자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경11,1') {
  //   msg.channel.send('@here  🔥   경쟁 11번방 1자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경11,2') {
  //   msg.channel.send('@here  🔥   경쟁 11번방 2자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경11,3') {
  //   msg.channel.send('@here  🔥   경쟁 11번방 3자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경12,1') {
  //   msg.channel.send('@here  🔥   경쟁 12번방 1자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경12,2') {
  //   msg.channel.send('@here  🔥   경쟁 12번방 2자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경12,3') {
  //   msg.channel.send('@here  🔥   경쟁 12번방 3자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경13,1') {
  //   msg.channel.send('@here  🔥   경쟁 13번방 1자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경13,2') {
  //   msg.channel.send('@here  🔥   경쟁 13번방 2자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경13,3') {
  //   msg.channel.send('@here  🔥   경쟁 13번방 3자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경14,1') {
  //   msg.channel.send('@here  🔥   경쟁 14번방 1자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경14,2') {
  //   msg.channel.send('@here  🔥   경쟁 14번방 2자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경14,3') {
  //   msg.channel.send('@here  🔥   경쟁 14번방 3자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경15,1') {
  //   msg.channel.send('@here  🔥   경쟁 15번방 1자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경15,2') {
  //   msg.channel.send('@here  🔥   경쟁 15번방 2자리 채워주실분~🔥');
  // }
  // if (msg.content === '!경15,3') {
  //   msg.channel.send('@here  🔥   경쟁 15번방 3자리 채워주실분~🔥');
  // }
  //라이브
  if (msg.content === '!라일1,1') {
    msg.channel.send('@here   🎬   라이브 일반 1번방 1자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765562180419664');
  }
  if (msg.content === '!라일1,2') {
    msg.channel.send('@here   🎬   라이브 일반 1번방 2자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765562180419664');
  }
  if (msg.content === '!라일1,3') {
    msg.channel.send('@here   🎬   라이브 일반 1번방 3자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765562180419664');
  }
  if (msg.content === '!라일2,1') {
    msg.channel.send('@here   🎬   라이브 일반 2번방 1자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765567192608828');
  }
  if (msg.content === '!라일2,2') {
    msg.channel.send('@here   🎬   라이브 일반 2번방 2자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765567192608828');
  }
  if (msg.content === '!라일2,3') {
    msg.channel.send('@here   🎬   라이브 일반 2번방 3자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765567192608828');
  }
  if (msg.content === '!라일3,1') {
    msg.channel.send('@here   🎬   라이브 일반 3번방 1자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765758222172181');
  }
  if (msg.content === '!라일3,2') {
    msg.channel.send('@here   🎬   라이브 일반 3번방 2자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765758222172181');
  }
  if (msg.content === '!라일3,3') {
    msg.channel.send('@here   🎬   라이브 일반 3번방 3자리 채워주실분~🎬 \ https://discord.com/channels/618395850275553300/1022765758222172181');
  }
  //라이브 경쟁
  if (msg.content === '!라경1,1') {
    msg.channel.send('@here   🍿   라이브 경쟁 1번방 1자리 채워주실분~🍿');
  }
  if (msg.content === '!라경1,2') {
    msg.channel.send('@here   🍿   라이브 경쟁 1번방 2자리 채워주실분~🍿');
  }
  if (msg.content === '!라경1,3') {
    msg.channel.send('@here   🍿   라이브 경쟁 1번방 3자리 채워주실분~🍿');
  }
  if (msg.content === '!라경2,1') {
    msg.channel.send('@here   🍿   라이브 경쟁 2번방 1자리 채워주실분~🍿');
  }
  if (msg.content === '!라경2,2') {
    msg.channel.send('@here   🍿   라이브 경쟁 2번방 2자리 채워주실분~🍿');
  }
  if (msg.content === '!라경2,3') {
    msg.channel.send('@here   🍿   라이브 경쟁 2번방 3자리 채워주실분~🍿');
  }
  if (msg.content === '!라경3,1') {
    msg.channel.send('@here   🍿   라이브 경쟁 3번방 1자리 채워주실분~🍿');
  }
  if (msg.content === '!라경3,2') {
    msg.channel.send('@here   🍿   라이브 경쟁 3번방 2자리 채워주실분~🍿');
  }
  if (msg.content === '!라경3,3') {
    msg.channel.send('@here   🍿   라이브 경쟁 3번방 3자리 채워주실분~🍿');
  }
  //게스트 일반
  if (msg.content === '!게일1,1') {
    msg.channel.send('@here   🕹️   게스트 일반 1번방 1자리 채워주실분~🕹️ ');
  }
  if (msg.content === '!게일1,2') {
    msg.channel.send('@here   🕹️   게스트 일반 1번방 2자리 채워주실분~🕹️ ');
  }
  if (msg.content === '!게일1,3') {
    msg.channel.send('@here   🕹️   게스트 일반 1번방 3자리 채워주실분~🕹️ ');
  }
  if (msg.content === '!게일2,1') {
    msg.channel.send('@here   🕹️   게스트 일반 2번방 1자리 채워주실분~🕹️ ');
  }
  if (msg.content === '!게일2,2') {
    msg.channel.send('@here   🕹️   게스트 일반 2번방 2자리 채워주실분~🕹️ ');
  }
  if (msg.content === '!게일2,3') {
    msg.channel.send('@here   🕹️   게스트 일반 2번방 3자리 채워주실분~🕹️ ');
  }
  if (msg.content === '!게일3,1') {
    msg.channel.send('@here   🕹️   게스트 일반 3번방 1자리 채워주실분~🕹️ ');
  }
  if (msg.content === '!게일3,2') {
    msg.channel.send('@here   🕹️   게스트 일반 3번방 2자리 채워주실분~🕹️ ');
  }
  if (msg.content === '!게일3,3') {
    msg.channel.send('@here   🕹️   게스트 일반 3번방 3자리 채워주실분~🕹️ ');
  }
  //게스트 경쟁
  if (msg.content === '!게경1,1') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 1번방 1자리 채워주실분~⚔️ ');
  }
  if (msg.content === '!게경1,2') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 1번방 2자리 채워주실분~⚔️ ');
  }
  if (msg.content === '!게경1,3') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 1번방 3자리 채워주실분~⚔️ ');
  }
  if (msg.content === '!게경2,1') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 2번방 1자리 채워주실분~⚔️ ');
  }
  if (msg.content === '!게경2,2') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 2번방 2자리 채워주실분~⚔️ ');
  }
  if (msg.content === '!게경2,3') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 2번방 3자리 채워주실분~⚔️ ');
  }
  if (msg.content === '!게경3,1') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 3번방 1자리 채워주실분~⚔️ ');
  }
  if (msg.content === '!게경3,2') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 3번방 2자리 채워주실분~⚔️ ');
  }
  if (msg.content === '!게경3,3') {
    msg.channel.send('@here   ⚔️   게스트 경쟁 3번방 3자리 채워주실분~⚔️ ');
  }


















});

client.login('MTA1Nzk1MzU5OTQ4Njk1MTUwNA.GDOeEM.ZER-p08ya5ldT28utLtBUDlOrwlUGzZ8_mWnGc');

# 핑구봇

Discord 음성 채널의 팀 편성, 팀별 채널 이동, 원래 채널 복귀와 구인 초대장을 제공하는 봇입니다.

## Heroku 설정

- Config Vars에 `DISCORD_TOKEN`을 등록합니다.
- Discord Developer Portal의 **Bot → Privileged Gateway Intents**에서 **Message Content Intent**를 켭니다.
- 봇 역할에는 채널 보기, 메시지 보내기, 메시지 기록 보기, 링크 첨부, 음성 채널 연결, 초대장 만들기, 멤버 이동 권한이 필요합니다.
- Heroku worker는 `Procfile`의 `worker: node index.js`로 실행됩니다.

## 명령어

- `!팀 2`: 팀당 최대 2명으로 무작위 팀 편성
- `!출동`: 버튼 대신 사용할 수 있는 팀 이동 명령어
- `!구인구직`, `!모여라`: 현재 음성 채널 초대장 생성
- `!핑구봇명령어`, `!핑구봇사용법`: 도움말 표시

팀 편성 메시지의 버튼으로 팀별 채널에 출동하거나 해산 후 원래 음성 채널로 복귀할 수 있습니다.

## 로컬 확인

```sh
npm install
npm test
npm start
```

const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');

const registerSocketServer = (serverURL) => {
  const io = require('socket.io')(serverURL, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  // 미들웨어 | 소켓 서버 token 체크 : https://socket.io/docs/v4/middlewares/ 문서 참고
  io.use((socket, next) => {
    authSocket(socket, next);
  });

  // 유저가 소켓 서버에 연결되었을 때
  io.on('connection', (socket) => {
    console.log('user connected::::::');
    console.log(socket.id);

    newConnectionHandler(socket, io); // connectedUsers Map 자료형에 새로운 유저 정보 저장
  });
};

module.exports = {
  registerSocketServer,
};
const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const disconnectServer = require('./disconnectHandler');

const registerSocketServer = (serverURL) => {
  const io = require('socket.io')(serverURL, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  // :::::verifyTokenSocket(socket, next):::::
  // 미들웨어 | 소켓 서버 token 체크 : https://socket.io/docs/v4/middlewares/ 문서 참고
  io.use((socket, next) => {
    authSocket(socket, next);
  });

  // 유저가 소켓 서버에 연결되었을 때o==============================connection================================
  io.on('connection', (socket) => {
    console.log('user connected::::::');
    console.log(socket.id);

    newConnectionHandler(socket, io); // ::::::::connectedUsers | Map 자료형에 새로운 유저 정보 저장::::::::::

    // 유저가 소켓 서버에 연결해제되었을 때o==========================disconnect===============================
    socket.on('disconnect', () => {
      disconnectServer(socket); //:::::::::connectUsers | Map 자료형에서 유저 정보 제거:::::::::::::::::::::::
    });
  });
};

module.exports = {
  registerSocketServer,
};

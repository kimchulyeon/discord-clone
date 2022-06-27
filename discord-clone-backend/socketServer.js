const registerSocketServer = (serverURL) => {
  const io = require('socket.io')(serverURL, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  // 유저가 소켓 서버에 연결되었을 때
  io.on('connection', (socket) => {
    console.log('user connected::::::');
    console.log(socket.id);
  });
};

module.exports = {
  registerSocketServer,
};

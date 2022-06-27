import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = (userDetail) => {
  const jwtToken = userDetail.token;

  socket = io('http://localhost:5002', {
    auth: {
      token: jwtToken,
    },
  }); // 서버 URL과 연결

  // 클라이언트가 소켓서버와 연결되었을 때
  socket.on('connect', () => {
    console.log('successfully connected with socket.io server');
    console.log(socket.id); // 클라이언트 ID
  });
};

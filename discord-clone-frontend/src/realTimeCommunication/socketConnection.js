import io from 'socket.io-client';

let SOCKET = null;

export const connectWithSocketServer = () => {
  SOCKET = io('http://localhost:5002'); // 서버 URL과 연결

  // 소켓서버와 연결되었을 때
  SOCKET.on('connect', () => {
    console.log('successfully connected with socket.io server');
    console.log(SOCKET.id);
  });
};

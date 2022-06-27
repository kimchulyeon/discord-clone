const jwt = require('jsonwebtoken');

const config = process.env;

// 소켓 미들웨어
const verifyTokenSocket = (socket, next) => {
  // socket.handshake.query.token
  const token = socket.handshake.auth?.token; // handshake : https://socket.io/docs/v4/server-socket-instance/ 문서 참고

  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY); // verify : https://github.com/auth0/node-jsonwebtoken 문서 참고
    socket.user = decoded;
  } catch (err) {
    const socketError = new Error('NOT_AUTHORIZED');
    return next(socketError);
  }

  next();
};

module.exports = verifyTokenSocket;

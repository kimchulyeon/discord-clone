const serverStore = require('../serverStore');

const newConnectionHandler = async (socket, io) => {
  const userDetail = socket.user;

  // connectedUsers Map 자료형에 유저 정보 저장
  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetail.userId, //  token (=userDetail) : {userId: user._id, mail}
  });
};

module.exports = newConnectionHandler;

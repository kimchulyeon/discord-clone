const connectedUsers = new Map(); // Map 자료형 {"name": "kim"}

// connectedUsers Map 자료형에 유저 정보 저장
const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId }); // {"socketId": "userId"}

  console.log('new connected users');
  console.log(connectedUsers);
};

const removeConnectedUser = (socketId) => {
  if (connectedUsers.has(socketId)) {
    connectedUsers.delete(socketId);
    console.log('new connected users');
    console.log(connectedUsers);
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
};

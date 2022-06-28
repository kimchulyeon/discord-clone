const connectedUsers = new Map(); // Map 자료형 {"name": "kim"} | "name" => "kim"

// 자료형에 유저 정보 저장o=====================================================================
const addNewConnectedUser = ({ socketId, userId }) => {
  connectedUsers.set(socketId, { userId }); // {"socketId": "userId"}  :::::::Map.set()::::::

  console.log('new connected users');
  console.log(connectedUsers);
};

// 자료형에 유저 정보 제거o=====================================================================
const removeConnectedUser = (socketId) => {
  //:::::::Map.has()::::::
  if (connectedUsers.has(socketId)) {
    //:::::::Map.delete()::::::
    connectedUsers.delete(socketId);
    console.log('new connected users');
    console.log(connectedUsers);
  }
};

module.exports = {
  addNewConnectedUser,
  removeConnectedUser,
};

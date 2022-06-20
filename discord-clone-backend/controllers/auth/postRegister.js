const User = require('../../models/user');
const bcrypt = require('bcryptjs');

// [6] 회원가입 로직
const postRegister = async (request, response) => {
  try {
    const { username, mail, password } = req.body;
    // [6] EMAIL 중복 체크
    const userExists = await User.exists({ mail: mail.toLowerCase() });

    if (userExists) {
      return response.status(409).send('E-mail already in use');
    }

    // [6] 해쉬 비밀번호
    const encryptedPassword = await bcrypt.hash(password, 10);

    // [6] 데이터베이스에 유저 정보 저장
    const user = await User.create({
      username,
      mail: mail.toLowerCase(),
      password: encryptedPassword,
    });

    // [6] JWT TOKEN 생성
    const token = 'JWT TOKEN';

    // [6] 성공 : 유저에게 토큰과 이메일, 유저이름 데이터를 넘겨준다
    response.status(201).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (err) {
    return response.status(500).send('Error occured. Please try again');
  }
};

module.exports = postRegister;

const User = require('../../models/user');
const bcrypt = require('bcryptjs');

// [6] 회원가입 로직
const postRegister = async (request, response) => {
  try {
    const { username, mail, password } = request.body; // 유저에게 입력 받은 데이터
    // [6] EMAIL 중복 체크
    const userExists = await User.exists({ mail: mail.toLowerCase() });

    // 중복되는 이메일일 경우 에러 처리
    if (userExists) {
      return response.status(409).send('E-mail already in use');
    }

    // [6] 해쉬 비밀번호
    const encryptedPassword = await bcrypt.hash(password, 10);

    // [6] 데이터베이스에 유저 정보 저장 (몽구스 스키마를 적용해서 생성)
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
    return response.status(500).send(`Error occured. Please try again`);
  }
};

module.exports = postRegister;

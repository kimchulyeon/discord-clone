const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (request, response) => {
  try {
    const { mail, password } = request.body;

    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new TOKEN
      // sign : https://github.com/auth0/node-jsonwebtoken 문서 참고
      const token = jwt.sign(
        {
          userId: user._id,
          mail,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: '24h',
        },
      );

      return response.status(200).json({
        userDetails: {
          mail: user.mail,
          token: token,
          username: user.username,
        },
      });
    }

    return response.status(400).send('Invalid credentials. Please try again');
  } catch (err) {
    return response.status(500).send('Something went wrong. Please try again');
  }
};

module.exports = postLogin;

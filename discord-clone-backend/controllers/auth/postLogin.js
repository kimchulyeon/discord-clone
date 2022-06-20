const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (request, response) => {
  try {
    const { mail, password } = request.body;

    const user = await User.findOne({ mail: mail.toLowerCase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new TOKEN
      const token = 'JWT_TOKEN';

      return response.status(200).json({
        userDetails: {
          mail: user.mail,
          token,
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

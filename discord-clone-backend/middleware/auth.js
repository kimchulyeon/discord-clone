const jwt = require('jsonwebtoken');

const config = process.env;

// 토큰 유무 판단 (토큰이 있을 경우만 접근이 가능하게 하기 위함)
const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['authorization'];

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    token = token.replace(/^Bearer\s+/, '');
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }

  return next();
};

module.exports = verifyToken;

// [2]
const express = require('express');
const router = express.Router();
// [3] 모듈화
const authControllers = require('../controllers/auth/authControllers');

// http://localhost:5002/api/auth/register : 회원가입
/* 
'/register', (request, response) => {
  response.send('register route');
}
이 형태였는데 컨트롤러폴더로 모듈을 분리 : exports.controllers = {postLogin, postRegister}
*/
router.post('/register', authControllers.controllers.postRegister);

// http://localhost:5002/api/auth/login : 로그인
router.post('/login', authControllers.controllers.postLogin);

module.exports = router;

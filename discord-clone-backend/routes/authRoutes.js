// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
// ::::::::::::::::::::::::::::::::::::::::::::::::BASE_URL/auth::::::::::::::::::::::::::::::::::::::::::::::::://
// :::::::::::::::::::::::::::::::::::::::::::::::로그인 | 회원가입:::::::::::::::::::::::::::::::::::::::::::::::://
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

// [2]
const express = require('express');
const router = express.Router();
// [3] 모듈화
const authControllers = require('../controllers/auth/authControllers');
// [4] joi 라이브러리
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
// [7] ==============================auth 미들웨어 (토큰 유무 판단)o===============================
const auth = require('../middleware/auth');

// [4] ===========================controller로 가기 전에 validation 체크o=========================
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(), // 3~12 길이의 사용자 이름
  password: Joi.string().min(6).max(12).required(), // 3~12 길이의 사용자 PW
  mail: Joi.string().email().required(), // 이메일 체크
});
const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(), // 3~12 길이의 사용자 PW
  mail: Joi.string().email().required(), // 이메일 체크
});

// 회원가입
/**
 * '/register', (request, response) => {
 *   response.send('register route');
 * }
 * 이 형태였는데 컨트롤러폴더로 모듈을 분리 : authControllers.js : exports.controllers = {postLogin, postRegister}
 **/

// [4] ==============================로그인 | 회원가입 validator 추가==============================
// 회원가입
router.post('/register', validator.body(registerSchema), authControllers.controllers.postRegister);
// 로그인
router.post('/login', validator.body(loginSchema), authControllers.controllers.postLogin);

// [7] ======================================미들웨어 테스트=======================================
// /test 경로는 토큰이 있어야만 접근 가능하게 미들웨어를 설정함
router.get('/test', auth, (req, res) => {
  res.send('request passed');
});

module.exports = router;

// [1] 필요한 패키지 가져오기
const express = require('express'); // express : nodejs 라이브러리
const http = require('http'); // express 내장 http
const cors = require('cors'); // cors 라이브러리 cors 에러 처리(?)
const mongoose = require('mongoose'); // mongodb 연결 라이브러리
require('dotenv').config();

// [2] authRoutes.js 서버 라우트 : 파라미터? 생성
const authRoutes = require('./routes/authRoutes');

// [1] 사용자 로컬 URI 또는 하드코딩 5002포트
const PORT = process.env.API_PORT || process.env.PORT;

// [1] express로 json파싱, cors 라이브러리 사용
const app = express();
app.use(express.json());
app.use(cors());

// [2] register the Routes
// 서버 BASE_URL + param을 http://localhost:5002/api/auth로 설정 | params는 authRoutes.js에 설정
app.use('/api/auth', authRoutes);

// [1] 서버 열기
const server = http.createServer(app);

// [1] mongodb 연결 | 성공, 에러 처리
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('database connection failed. Server not started');
    console.log(err);
  });

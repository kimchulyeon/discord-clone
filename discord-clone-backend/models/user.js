const mongoose = require('mongoose');

// [5] 몽구스 스키마
// 스키마를 기준으로 데이터를 DB에 넣기 전에 검사
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  nickname: { type: String },
  // mail: { type: String, unique: true },
  // username: { type: String },
  // password: { tpye: String },
});

module.exports = mongoose.model('user', userSchema);

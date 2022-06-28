const mongoose = require('mongoose');

// [5] 몽구스 스키마
const Schema = mongoose.Schema;
// 스키마를 기준으로 데이터를 DB에 넣기 전에 검사
const userSchema = new Schema({
  // mail: { type: String, required: true, unique: true, lowercase: true },
  // password: { type: String, required: true, trim: true },
  // username: { type: String },
  mail: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
});

// user테이블에 유저 데이터 저장o================================================
module.exports = mongoose.model('User', userSchema);

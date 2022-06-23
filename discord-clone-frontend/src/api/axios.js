import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5002/api/auth/',
  timeout: 1000,
});

// 로그인
export const login = async (data) => {
  try {
    return await instance.post('login', data);
  } catch (err) {
    console.log(err);
    return err;
  }
};

// 회원가입
export const register = async (data) => {
  try {
    return await instance.post('register', data);
  } catch (err) {
    console.log(err);
    return err;
  }
};

import axios from 'axios';
import { logout } from '../assets/js/validators';

// instance===============================================================================================================
const instance = axios.create({
  baseURL: 'http://localhost:5002/api/auth/',
  timeout: 1000,
});

// axios interceptor======================================================================================================
instance.interceptors.request.use(
  (config) => {
    const userDetail = localStorage.getItem('user');

    if (userDetail) {
      const token = JSON.parse(userDetail).token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
//=========================================================================================================================

// login===================================================================================================================
export const login = async (data) => {
  try {
    return await instance.post('login', data);
  } catch (err) {
    return err;
  }
};
//==========================================================================================================================

// register=================================================================================================================
export const register = async (data) => {
  try {
    return await instance.post('register', data);
  } catch (err) {
    return err;
  }
};
//==========================================================================================================================

// 친구초대o=================================================================================================================
export const sendFriendInvitation = async (data) => {
  try {
    return await instance.post('/friend-invitation/invite', data);
  } catch (err) {
    checkResponseCode();
    return {
      error: true,
      err,
    };
  }
};
//==========================================================================================================================

function checkResponseCode(err) {
  const responseCode = err?.response?.status;

  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
}

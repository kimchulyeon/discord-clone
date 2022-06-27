import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from '../api/axios';

import history from '../custom/history';

// 상태o================================================================================================================
const initialState = {
  userDetail: null,
  loading: true,
  error: false,
  showAlert: false,
  alertMessageContent: null,
};

// 회원가입 THUNK========================================================================================================
export const postRegister = createAsyncThunk('POST/REGISTER', async (userDetail, { rejectWithValue }) => {
  const response = await register(userDetail);
  try {
    return response?.data.userDetails;
  } catch (err) {
    return rejectWithValue(response.response.data);
  }
});

// 로그인 THUNK===========================================================================================================
export const postLogin = createAsyncThunk('POST/LOGIN', async (user, { rejectWithValue }) => {
  const response = await login(user);
  try {
    return response?.data.userDetails;
  } catch (err) {
    return rejectWithValue(response.response.data);
  }
});

// Slice=================================================================================================================
const SLICE = createSlice({
  name: 'stores',
  initialState, // state 객체

  reducers: {
    // Alert창 보여주기 | 숨기기
    setShowAlert(state, action) {
      state.showAlert = action.payload;
    },
    // Alert창 내용 변경
    setAlertMessage(state, action) {
      state.alertMessageContent = action.payload;
    },
    // userDetail 상태 변경
    setUserDetail(state, action) {
      state.userDetail = action.payload;
    },
  },

  extraReducers: {
    // 회원가입
    [postRegister.pending]: (state) => {
      state.showAlert = false;
      state.alertMessageContent = '';
    },
    [postRegister.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;

      localStorage.setItem('user', JSON.stringify(action.payload)); // 로컬스토리지에 user정보 객체 저장
      history.push('/login'); // 회원가입이 완료되면 로그인 페이지로 이동
    },
    [postRegister.rejected]: (state, action) => {
      state.loading = true;
      state.error = true;
      state.showAlert = true;
      state.alertMessageContent = action.payload; // 회원가입 실패 시 alert창
    },
    // 로그인
    [postLogin.pending]: (state) => {
      state.loading = true;
      state.alertMessageContent = '';
    },
    [postLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;

      state.userDetail = action.payload; // userDetail상태값 변경
      history.push('/dashboard'); // 로그인이 성공하면 대시보드 페이지로 이동
    },
    [postLogin.rejected]: (state, action) => {
      state.loading = true;
      state.error = true;
      state.showAlert = true;
      state.alertMessageContent = action.payload; // 로그인 실패 시 alert창
    },
  },
});

export const { setShowAlert, setAlertMessage, setUserDetail } = SLICE.actions; // reducer
export default SLICE.reducer; // store.js 프로퍼티

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from '../api/axios';

// 상태
const initialState = {
  userDetail: null,
  loading: true,
  error: false,
};

// asyncThunk
export const postRegister = createAsyncThunk('POST/Register', async (userDetail) => {
  const response = await register(userDetail);
  console.log(response.data.userDetails);
  return response.data.userDetails;
});

export const postLogin = createAsyncThunk('POST/LOGIN', async (user) => {
  const response = await login(user);
  if (response.error) {
    // show error message modal
  } else {
    // return response.data.userDetails;
    const { userDetails } = response.data;
    localStorage.setItem('user', JSON.stringify(userDetails));
    return userDetails;
  }
});

// SLICE
export const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState, // state 객체
  reducers: {}, // state 변경 함수 // dispatch(함수(action.payload))

  extraReducers: {
    // REGISTER
    [postRegister.pending]: (state) => {
      state.loading = true;
    },
    [postRegister.fulfilled]: (state) => {
      state.loading = false;
      state.error = false;
    },
    [postRegister.rejected]: (state) => {
      state.loading = true;
      state.error = true;
    },
    // LOGIN
    [postLogin.pending]: (state) => {
      state.loading = true;
    },
    [postLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.userDetail = action.payload;
    },
    [postLogin.rejected]: (state) => {
      state.loading = true;
      state.error = true;
    },
  },
});

// SLICE 객체에서 reducer 함수들을 export
export const {} = userDetailSlice.actions;

// SLICE 객체에서 reducer를 export
export default userDetailSlice.reducer;

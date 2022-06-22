import { createSlice } from '@reduxjs/toolkit';

// 상태
const initialState = {
  userDetail: null,
};

// SLICE
export const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState, // state 객체
  reducers: {}, // state 변경 함수 // dispatch(함수(action.payload))
});

// SLICE 객체에서 reducer 함수들을 export
export const {} = userDetailSlice.actions;

// SLICE 객체에서 reducer를 export
export default userDetailSlice.reducer;

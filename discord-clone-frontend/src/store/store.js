import { configureStore } from '@reduxjs/toolkit';
import userDetailReducer from './userDetailReducer';

/* 
@ index.js에 Provider로 전달
@ 컴포넌트에서의 사용은 useSelector와 useDispatch
*/
export const store = configureStore({
  reducer: {
    auth: userDetailReducer, // useSelector(state => state.auth.userDetail)
  },
});

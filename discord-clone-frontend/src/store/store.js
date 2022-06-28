import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import SLICE from './index';
/**
 * index.js에 Provider로 전달
 * 컴포넌트에서의 사용은 useSelector와 useDispatch
 **/
export const store = configureStore({
  reducer: {
    SLICE,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

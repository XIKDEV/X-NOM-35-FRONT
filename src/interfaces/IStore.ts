import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../store/auth';
import { requestSlice } from '../store/request';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  request: requestSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

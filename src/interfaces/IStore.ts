import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../store/auth';
import { usersSlice } from '../store/users';
import { requestSlice } from '../store/request';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  users: usersSlice.reducer,
  request: requestSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

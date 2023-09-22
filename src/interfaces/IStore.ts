import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../store/auth';
import { usersSlice } from '../store/users';
import { enterprisesSlice } from '../store/enterprises';
import { requestSlice } from '../store/request';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  users: usersSlice.reducer,
  enterprises: enterprisesSlice.reducer,
  request: requestSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

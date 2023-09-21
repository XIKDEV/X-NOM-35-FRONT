import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { requestSlice } from './request';
import { usersSlice } from './users';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    request: requestSlice.reducer,
  },
});

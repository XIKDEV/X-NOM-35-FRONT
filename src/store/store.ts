import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { requestSlice } from './request';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    request: requestSlice.reducer,
  },
});

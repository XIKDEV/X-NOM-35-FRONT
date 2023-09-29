import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { usersSlice } from './users';
import { enterprisesSlice } from './enterprises';
import { formsSlice } from './forms';
import { requestSlice } from './request';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    enterprises: enterprisesSlice.reducer,
    forms: formsSlice.reducer,
    request: requestSlice.reducer,
  },
});

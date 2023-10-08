import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../store/auth';
import { usersSlice } from '../store/users';
import { enterprisesSlice } from '../store/enterprises';
import { formsSlice } from '../store/forms';
import { requestSlice } from '../store/request';
import { catalogsSlice } from '../store/catalogs';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  users: usersSlice.reducer,
  enterprises: enterprisesSlice.reducer,
  forms: formsSlice.reducer,
  catalogs: catalogsSlice.reducer,
  request: requestSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

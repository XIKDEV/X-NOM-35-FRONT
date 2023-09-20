import { createSlice } from '@reduxjs/toolkit';
import { IAuthSliceInitialState } from '../../interfaces';

const initialState: IAuthSliceInitialState = {
  user: {},
  auth: 'not-auth',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      state.auth = 'auth';
      state.user = payload;
    },
    setCheckingAuth: (state) => {
      state.auth = 'checking';
    },
    setLogout: (state) => {
      state.auth = initialState.auth;
      state.user = initialState.user;
    },

    setInitialState: (state) => {
      state.user = initialState.user;
      state.auth = initialState.auth;
    },
  },
});

export const {
  setLogin,
  setCheckingAuth,
  setLogout,

  setInitialState,
} = authSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { IStoreUsersInitialState } from '../../interfaces';

const initialState: IStoreUsersInitialState = {
  users: [],
  userActive: {
    id: 0,
    name: '',
    lastname: '',
    email: '',
    id_role: '',
  },
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setCleanUsers: (state) => {
      state.users = initialState.users;
    },

    setUserActive: (state, { payload }) => {
      state.userActive = payload;
    },
    setCleaneUserActive: (state) => {
      state.userActive = initialState.userActive;
    },
  },
});

export const { setUsers, setCleanUsers, setUserActive, setCleaneUserActive } =
  usersSlice.actions;

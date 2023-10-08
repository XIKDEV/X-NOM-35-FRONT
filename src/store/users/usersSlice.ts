import { createSlice } from '@reduxjs/toolkit';
import { IStoreUsersInitialState } from '../../interfaces';

const initialState: IStoreUsersInitialState = {
  users: [],
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
  },
});

export const { setUsers, setCleanUsers } = usersSlice.actions;

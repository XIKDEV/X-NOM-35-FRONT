import { createSlice } from '@reduxjs/toolkit';
import { IStoreUsers } from '../../interfaces';

const initialState: IStoreUsers = {
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

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
    id_enterprise: {
      id: 0,
      business_name: '',
      comercial_name: '',
      legal_representative: '',
      RFC: '',
      street: '',
      exterior_number: '',
      interior_number: '',
      suburb: '',
      postal_code: 0,
      country: '',
      city: 0,
      state: 0,
      enterprise_type: '',
      turn_enterprise: '',
      tellphone: '',
      email: '',
      image: '',
    },
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
    setCleanUserActive: (state) => {
      state.userActive = initialState.userActive;
    },
  },
});

export const { setUsers, setCleanUsers, setUserActive, setCleanUserActive } =
  usersSlice.actions;

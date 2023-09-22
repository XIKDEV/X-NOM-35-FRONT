import { createSlice } from '@reduxjs/toolkit';
import { IStoreEnterprises } from '../../interfaces';

// TODO: Crear interface para initialState
const initialState: IStoreEnterprises = {
  enterprises: [],
};

export const enterprisesSlice = createSlice({
  name: 'enterprises',
  initialState,
  reducers: {
    setEnterprises: (state, { payload }) => {
      state.enterprises = payload;
    },

    setCleanEnterprises: (state) => {
      state.enterprises = initialState.enterprises;
    },
  },
});

export const { setEnterprises, setCleanEnterprises } = enterprisesSlice.actions;

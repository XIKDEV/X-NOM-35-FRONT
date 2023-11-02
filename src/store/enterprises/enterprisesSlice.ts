import { createSlice } from '@reduxjs/toolkit';
import { IStoreEnterprisesInitialState } from '../../interfaces';

const initialState: IStoreEnterprisesInitialState = {
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

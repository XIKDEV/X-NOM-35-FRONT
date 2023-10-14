import { createSlice } from '@reduxjs/toolkit';
import { IStoreFormsInitialState } from '../../interfaces';

const initialState: IStoreFormsInitialState = {
  isDrawerForm: false,
  isForm: 'none',
};

export const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setOpenDrawerForm: (state, { payload }) => {
      state.isForm = payload;
      state.isDrawerForm = true;
    },
    setCloseDrawerForm: (state) => {
      state.isDrawerForm = initialState.isDrawerForm;
      state.isForm = initialState.isForm;
    },
  },
});

export const { setOpenDrawerForm, setCloseDrawerForm } = formsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { IStoreForms } from '../../interfaces';

const initialState: IStoreForms = {
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

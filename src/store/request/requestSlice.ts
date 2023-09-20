import { createSlice } from '@reduxjs/toolkit';
import { IRequestSliceInitialState } from '../../interfaces';

const initialState: IRequestSliceInitialState = {
  isLoading: false,
  isSave: false,
  isError: false,
  message: '',
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setSave: (state, { payload }) => {
      state.isLoading = initialState.isLoading;
      state.isSave = true;
      state.message = payload;
    },
    setCleanSave: (state) => {
      state.isSave = initialState.isSave;
      state.message = initialState.message;
    },
    setError: (state, { payload }) => {
      state.isLoading = initialState.isLoading;
      state.isError = true;
      state.message = payload;
    },
    setCleanError: (state) => {
      state.isError = initialState.isError;
      state.message = initialState.message;
    },
  },
});

export const { setLoading, setSave, setCleanSave, setError, setCleanError } =
  requestSlice.actions;

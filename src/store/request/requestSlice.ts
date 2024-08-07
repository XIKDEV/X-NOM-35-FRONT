import { createSlice } from '@reduxjs/toolkit';
import { IRequestSliceInitialState } from '../../interfaces';

const initialState: IRequestSliceInitialState = {
  isReloadPage: false,
  isLoading: false,
  isSave: false,
  isError: false,
  isMessage: '',
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setReloadPage: (state) => {
      state.isReloadPage = true;
    },
    setPageReloaded: (state) => {
      state.isReloadPage = initialState.isReloadPage;
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setStopLoading: (state) => {
      state.isLoading = initialState.isLoading;
    },
    setSave: (state, { payload }) => {
      state.isLoading = initialState.isLoading;
      state.isSave = true;
      state.isMessage = payload;
    },
    setCleanSave: (state) => {
      state.isSave = initialState.isSave;
      state.isMessage = initialState.isMessage;
    },
    setError: (state, { payload }) => {
      state.isLoading = initialState.isLoading;
      state.isError = true;
      state.isMessage = payload;
    },
    setCleanError: (state) => {
      state.isError = initialState.isError;
      state.isMessage = initialState.isMessage;
    },
  },
});

export const {
  setReloadPage,
  setPageReloaded,
  setLoading,
  setStopLoading,
  setSave,
  setCleanSave,
  setError,
  setCleanError,
} = requestSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { IStoreCatalogsInitialState } from '../../interfaces';

const initialState: IStoreCatalogsInitialState = {
  modules: {
    role: [],
    states: {
      statesArray: [],
      citiesArray: {
        'Baja California': [],
        'Baja California Sur': [],
      },
    },
  },
};

export const catalogsSlice = createSlice({
  name: 'catalogs',
  initialState,
  reducers: {
    setCatalogsOptions: (state, { payload }) => {
      state.modules = payload;
    },
    setCleanCatalogsOptions: (state) => {
      state.modules = initialState.modules;
    },
  },
});

export const { setCatalogsOptions, setCleanCatalogsOptions } =
  catalogsSlice.actions;

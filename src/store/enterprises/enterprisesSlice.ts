import { createSlice } from '@reduxjs/toolkit';
import { IStoreEnterprisesInitialState } from '../../interfaces';

const initialState: IStoreEnterprisesInitialState = {
  enterprises: [],
  enterpriseActive: {
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
    state: '',
    municipality: '',
    country: '',
    enterprise_type: '',
    turnEnterprise: '',
    tellphone: '',
    email: '',
    image: '',
  },
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

    setEnterpriseActive: (state, { payload }) => {
      state.enterpriseActive = payload;
    },
    setCleanEnterpriseActive: (state) => {
      state.enterpriseActive = initialState.enterpriseActive;
    },
  },
});

export const {
  setEnterprises,
  setCleanEnterprises,
  setEnterpriseActive,
  setCleanEnterpriseActive,
} = enterprisesSlice.actions;

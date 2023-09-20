import { IRequestSliceInitialState } from '../../interfaces';

export const initialStateRequest: IRequestSliceInitialState = {
  isLoading: false,
  isSave: false,
  isError: false,
  message: '',
};

export const isLoadingState: IRequestSliceInitialState = {
  isLoading: true,
  isSave: false,
  isError: false,
  message: '',
};

export const isSaveState: IRequestSliceInitialState = {
  isLoading: false,
  isSave: true,
  isError: false,
  message: 'Proceso exitoso',
};

export const isErrorState: IRequestSliceInitialState = {
  isLoading: false,
  isSave: false,
  isError: true,
  message: 'Proceso fallido',
};

export const messageSave: string = 'Proceso exitoso';
export const messageError: string = 'Proceso fallido';

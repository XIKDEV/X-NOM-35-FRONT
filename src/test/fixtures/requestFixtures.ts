import { IRequestSliceInitialState } from '../../interfaces';

export const initialStateRequest: IRequestSliceInitialState = {
  isLoading: false,
  isSave: false,
  isError: false,
  isMessage: '',
};

export const isLoadingState: IRequestSliceInitialState = {
  isLoading: true,
  isSave: false,
  isError: false,
  isMessage: '',
};

export const isSaveState: IRequestSliceInitialState = {
  isLoading: false,
  isSave: true,
  isError: false,
  isMessage: 'Proceso exitoso',
};

export const isErrorState: IRequestSliceInitialState = {
  isLoading: false,
  isSave: false,
  isError: true,
  isMessage: 'Proceso fallido',
};

export const messageSave: string = 'Proceso exitoso';
export const messageError: string = 'Proceso fallido';

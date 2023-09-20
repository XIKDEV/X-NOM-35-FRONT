export const setSaveInfo = (message: string) => {
  return async (dispatch: CallableFunction) => {
    import('./requestSlice').then(({ setSave }) => {
      dispatch(setSave(message));
    });
  };
};

export const setErrorInRequest = (message: string) => {
  return async (dispatch: CallableFunction) => {
    import('./requestSlice').then(({ setError }) => {
      dispatch(setError(message));
    });
  };
};

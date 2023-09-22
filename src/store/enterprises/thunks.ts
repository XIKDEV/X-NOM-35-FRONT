import { getAdapter, content, sublink } from '../../api';

export const getEnterprisesList = () => {
  return async (dispatch: CallableFunction) => {
    import('../request/requestSlice').then(({ setLoading }) => {
      dispatch(setLoading());
    });

    const token = localStorage.getItem('token');
    const header = {
      content,
      auth: `Bearer ${token}`,
    };

    try {
      const { data } = await getAdapter(sublink.enterprise, header);
      import('./enterprisesSlice').then(({ setEnterprises }) => {
        dispatch(setEnterprises(data));
      });
      import('../request').then(({ setStopLoading }) => {
        dispatch(setStopLoading());
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.clear();
      import('../request').then(({ setErrorInRequest }) => {
        dispatch(setErrorInRequest(err.response.data.message));
      });
    }
  };
};

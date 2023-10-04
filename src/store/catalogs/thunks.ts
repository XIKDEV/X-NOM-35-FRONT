import { getAdapter } from '../../api';
import { content, sublink } from '../../api/routes';
export const getCatalogs = () => {
  return async (dispatch: CallableFunction) => {
    import('../request').then(({ setLoading }) => {
      dispatch(setLoading());
    });

    const token = localStorage.getItem('token');
    const header = {
      content,
      auth: `Bearer ${token}`,
    };

    try {
      const { data } = await getAdapter(sublink.catalogs, header);
      import('./catalogsSlice').then(({ setCatalogsOptions }) => {
        dispatch(setCatalogsOptions(data));
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

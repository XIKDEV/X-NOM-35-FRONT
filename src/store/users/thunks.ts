import { getAdapter, sublink } from '../../api';
import { content } from '../../api/routes';

export const getUsersList = () => {
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
      const { data } = await getAdapter(sublink.user, header);
      import('./usersSlice').then(({ setUsers }) => {
        dispatch(setUsers(data));
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

import { getAdapter, sublink, content, postAdapter } from '../../api';
import { IFormFieldUsers } from '../../interfaces';

export const getUsersList = () => {
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

export const postUser = (data: IFormFieldUsers) => {
  return async (dispatch: CallableFunction) => {
    import('../request').then(({ setLoading }) => {
      dispatch(setLoading());
    });

    const token = localStorage.getItem('token');
    const header = {
      auth: `Bearer ${token}`,
    };

    try {
      const { message } = await postAdapter(sublink.user, data, header);

      import('../request').then(({ setStopLoading, setSaveInfo }) => {
        dispatch(setStopLoading());
        dispatch(setSaveInfo(message));
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

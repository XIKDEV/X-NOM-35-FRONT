import { getAdapter, postAdapter } from '../../api';
import { content, sublink } from '../../api/routes';

import { ILoginData } from '../../interfaces';

export const setAuthLogin = (values: ILoginData) => {
  return async (dispatch: CallableFunction) => {
    import('./authSlice').then(({ setCheckingAuth }) => {
      dispatch(setCheckingAuth());
    });

    const header = {
      content,
    };

    try {
      const { data } = await postAdapter(sublink.auth, values, header);
      const { token, user } = data;
      localStorage.setItem('token', token);

      import('./authSlice').then(({ setLogin }) => {
        dispatch(setLogin(user));
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.clear();
      import('./authSlice').then(({ setLogout }) => {
        dispatch(setLogout());
      });
      import('../request').then(({ setErrorInRequest }) => {
        dispatch(setErrorInRequest(err.response.data.message));
      });
    }
  };
};
export const setAuthLogout = () => {
  return async (dispatch: CallableFunction) => {
    localStorage.removeItem('token');
    import('./authSlice').then(({ setLogout }) => {
      dispatch(setLogout());
    });
  };
};

export const validateJwt = () => {
  return async (dispatch: CallableFunction) => {
    const token = localStorage.getItem('token');
    const header = {
      auth: `Bearer ${token}`,
    };

    try {
      const { data } = await getAdapter(sublink.validJwt, header);
      const { token, user } = data;

      localStorage.setItem('token', token);

      import('./authSlice').then(({ setLogin }) => {
        dispatch(setLogin(user));
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.clear();
      if (err.response.status === 401) {
        localStorage.removeItem('token');
      }
    }
  };
};
export const noTokenInLocalStorage = () => {
  return async (dispatch: CallableFunction) => {
    window.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!window.token) {
          localStorage.removeItem('token');
          import('./authSlice').then(({ setLogout }) => {
            dispatch(setLogout());
          });
        }
      }
    });
  };
};

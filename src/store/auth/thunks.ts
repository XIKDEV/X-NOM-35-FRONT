import { getAdapter, postAdapter } from '../../api';
import { content, sublink } from '../../api/routes';
import { IFormFieldLogin } from '../../interfaces';

export const setAuthLogin = (values: IFormFieldLogin) => {
  return async (dispatch: CallableFunction) => {
    import('./authSlice').then(({ setCheckingAuth }) => {
      dispatch(setCheckingAuth());
    });

    const header = {
      content,
    };

    try {
      const { success, data } = await postAdapter(sublink.auth, values, header);
      const { token, user } = data;
      localStorage.setItem('token', token);

      import('./authSlice').then(({ setLogin }) => {
        dispatch(setLogin(user));
      });

      if (success) {
        import('../catalogs').then(({ getCatalogs }) => {
          dispatch(getCatalogs());
        });
      }
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
    import('../catalogs').then(({ setCleanCatalogsOptions }) => {
      dispatch(setCleanCatalogsOptions());
    });
    localStorage.removeItem('token');
    import('./authSlice').then(({ setLogout }) => {
      dispatch(setLogout());
    });
  };
};

export const validateJwt = () => {
  return async (dispatch: CallableFunction) => {
    import('../request').then(({ setReloadPage }) => {
      dispatch(setReloadPage());
    });

    const token = localStorage.getItem('token');
    const header = {
      auth: `Bearer ${token}`,
    };

    try {
      const { success, data } = await getAdapter(sublink.validJwt, header);
      const { token, user } = data;
      localStorage.setItem('token', token);
      import('./authSlice').then(({ setLogin }) => {
        dispatch(setLogin(user));
      });

      if (success) {
        import('../request').then(({ setPageReloaded }) => {
          dispatch(setPageReloaded());
        });
        import('../catalogs').then(({ getCatalogs }) => {
          dispatch(getCatalogs());
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.clear();
      import('../request').then(({ setPageReloaded }) => {
        dispatch(setPageReloaded());
      });
      if (err.response.status === 401) {
        localStorage.removeItem('token');
      }
    }
  };
};
export const noTokenInLocalStorage = () => {
  return async (dispatch: CallableFunction) => {
    import('../request').then(({ setReloadPage }) => {
      dispatch(setReloadPage());
    });
    window.addEventListener('storage', (event) => {
      if (event.storageArea === localStorage) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!window.token) {
          import('../catalogs').then(({ setCleanCatalogsOptions }) => {
            dispatch(setCleanCatalogsOptions());
          });
          localStorage.removeItem('token');
          import('./authSlice').then(({ setLogout }) => {
            dispatch(setLogout());
          });
        }
      }
    });
    import('../request').then(({ setPageReloaded }) => {
      dispatch(setPageReloaded());
    });
  };
};

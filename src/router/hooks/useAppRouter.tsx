import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const useAppRouter = () => {
  const dispatch: CallableFunction = useDispatch();

  const validateTokenExist = () => {
    import('../../store/auth').then(({ noTokenInLocalStorage }) => {
      dispatch(noTokenInLocalStorage());
    });
  };
  validateTokenExist();

  useEffect(() => {
    import('../../store/auth').then(({ validateJwt }) => {
      dispatch(validateJwt());
    });
  }, [dispatch]);

  const { pathname, search } = useLocation();
  const lastpath = pathname + search;
  useEffect(() => {
    localStorage.setItem('lastpath', lastpath);
  }, [lastpath]);
};

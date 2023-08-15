import { useEffect } from 'react';
import { authConstants } from '../../constants';
export const LoginPageHooks = () => {
  useEffect(() => {
    document.title = authConstants.titlePage;
  }, []);
};

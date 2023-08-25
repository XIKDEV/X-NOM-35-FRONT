import { useEffect } from 'react';
import { authConstants } from '../../constants';
export const useLoginPage = () => {
  useEffect(() => {
    document.title = authConstants.titlePage;
  }, []);
};

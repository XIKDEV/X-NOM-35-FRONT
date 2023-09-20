import { useEffect } from 'react';
import { enterprisesConstants } from '../../constants';
export const useEnterprisesPage = () => {
  useEffect(() => {
    document.title = enterprisesConstants.titlePage;
  }, []);
};

import { useEffect } from 'react';
import { usersConstants } from '../../constants';
export const useUsersPage = () => {
  useEffect(() => {
    document.title = usersConstants.titlePage;
  }, []);
};

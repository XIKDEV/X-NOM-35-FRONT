import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOpenNotification, useScreenSize } from '../../hooks';
import { IUsers, RootState } from '../../interfaces';
import { usersConstants } from '../../constants';

export const useUsersPage = () => {
  const { users } = useSelector((state: RootState) => state.users);
  const { isSave, isError, isMessage } = useSelector(
    (state: RootState) => state.request
  );
  const dispatch: CallableFunction = useDispatch();
  const { isMobile } = useScreenSize();
  const { contextHolder } = useOpenNotification({
    isSave,
    isError,
    isMessage,
    dispatch,
    isMobile,
  });

  const changeDocumentTitle = (title: string) => {
    document.title = title;
  };
  useEffect(() => {
    changeDocumentTitle(usersConstants.titlePage);
  }, []);

  useEffect(() => {
    import('../../store/users').then(({ getUsersList }) => {
      dispatch(getUsersList());
    });
    if (isSave) {
      import('../../store/users').then(({ getUsersList }) => {
        dispatch(getUsersList());
      });
    }

    return () => {
      import('../../store/users').then(({ setCleanUsers }) => {
        dispatch(setCleanUsers());
      });
    };
  }, [dispatch, isSave]);

  const handleOpenDrawerInfoUser = (user: IUsers) => {
    import('../../store/users').then(({ setUserActive }) => {
      dispatch(setUserActive(user));
    });
    import('../../store/forms').then(({ setOpenDrawerForm }) => {
      dispatch(setOpenDrawerForm('infoUser'));
    });
  };

  return {
    users,
    isMobile,
    contextHolder,
    changeDocumentTitle,
    handleOpenDrawerInfoUser,
  };
};

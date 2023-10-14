import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import { useScreenSize } from '../../hooks';
import { NotificationType, RootState } from '../../interfaces';
import { usersConstants } from '../../constants';
export const useUsersPage = () => {
  const { users } = useSelector((state: RootState) => state.users);
  const { isSave, isError, isMessage } = useSelector(
    (state: RootState) => state.request
  );
  const dispatch: CallableFunction = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const { isMobile } = useScreenSize();

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

  // TODO: Refactorizar a un custom hook las notificaciones
  useEffect(() => {
    const openNotification: (type: NotificationType) => void = (type) => {
      api[type]({
        message: 'Ups... algo salió mal',
        description: isMessage,
        style: { width: isMobile ? '80%' : '' },
      });
    };
    if (isError) {
      openNotification('error');
    }
    import('../../store/request').then(({ setCleanError }) => {
      dispatch(setCleanError());
    });
  }, [isError, dispatch, isMessage, api, isMobile]);

  useEffect(() => {
    const openNotification: (type: NotificationType) => void = (type) => {
      api[type]({
        message: 'Proceso exitoso',
        description: isMessage,
        style: { width: isMobile ? '80%' : '' },
      });
    };
    if (isSave) {
      import('../../store/forms').then(({ setCloseDrawerForm }) => {
        dispatch(setCloseDrawerForm());
      });
      openNotification('success');
    }
    import('../../store/request').then(({ setCleanSave }) => {
      dispatch(setCleanSave());
    });
  }, [isSave, dispatch, isMessage, api, isMobile]);

  return { users, isMobile, contextHolder, changeDocumentTitle };
};

import { notification } from 'antd';
import { useEffect } from 'react';
import { NotificationType } from '../interfaces';

export interface IUseOpenNotificationProps {
  isSave: boolean;
  isError: boolean;
  isMessage: string;
  dispatch: CallableFunction;
  isMobile: boolean;
}

export const useOpenNotification = ({
  isSave,
  isError,
  isMessage,
  dispatch,
  isMobile,
}: IUseOpenNotificationProps) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    const openNotification: (type: NotificationType) => void = (type) => {
      api[type]({
        message: isError
          ? 'Ups... algo salió mal'
          : isSave
          ? 'Proceso exitoso'
          : '',
        description: isMessage,
        style: { width: isMobile ? '80%' : '' },
      });
    };
    if (isSave) {
      import('../store/forms').then(({ setCloseDrawerForm }) => {
        dispatch(setCloseDrawerForm());
      });
      openNotification('success');
    }
    if (isError) {
      openNotification('error');
    }
    import('../store/request').then(({ setCleanSave }) => {
      dispatch(setCleanSave());
    });
    import('../store/request').then(({ setCleanError }) => {
      dispatch(setCleanError());
    });
  }, [isSave, isError, dispatch, isMessage, api, isMobile]);
  return { contextHolder };
};

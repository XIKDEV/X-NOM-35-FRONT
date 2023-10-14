import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import { useScreenSize } from '../../hooks';
import { NotificationType, RootState } from '../../interfaces';
import { enterprisesConstants } from '../../constants';

export const useEnterprisesPage = () => {
  const { enterprises } = useSelector((state: RootState) => state.enterprises);
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
    changeDocumentTitle(enterprisesConstants.titlePage);
  }, []);

  useEffect(() => {
    import('../../store/enterprises').then(({ getEnterprisesList }) => {
      dispatch(getEnterprisesList());
    });
    if (isSave) {
      import('../../store/enterprises').then(({ getEnterprisesList }) => {
        dispatch(getEnterprisesList());
      });
    }

    return () => {
      import('../../store/enterprises').then(({ setCleanEnterprises }) => {
        dispatch(setCleanEnterprises());
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

  return { enterprises, isMobile, contextHolder, changeDocumentTitle };
};

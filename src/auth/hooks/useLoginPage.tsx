import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notification } from 'antd';
import { NotificationType, RootState } from '../../interfaces';
import { authConstants } from '../../constants';
export const useLoginPage = () => {
  const { isError, message } = useSelector((state: RootState) => state.request);
  const dispatch: CallableFunction = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const changeDocumentTitle = (title: string) => {
    document.title = title;
  };
  useEffect(() => {
    changeDocumentTitle(authConstants.titlePage);
  }, []);

  useEffect(() => {
    const openNotification: (type: NotificationType) => void = (type) => {
      api[type]({
        message: 'Ups... algo salió mal',
        description: message,
      });
    };
    if (isError) {
      openNotification('error');
    }
    import('../../store/request').then(({ setCleanError }) => {
      dispatch(setCleanError());
    });
  }, [isError, dispatch, message, api]);

  return { contextHolder, changeDocumentTitle };
};

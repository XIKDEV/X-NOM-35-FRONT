import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOpenNotification, useScreenSize } from '../../hooks';
import { RootState } from '../../interfaces';
import { enterprisesConstants } from '../../constants';

export const useEnterprisesPage = () => {
  const { enterprises } = useSelector((state: RootState) => state.enterprises);
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

  return { enterprises, isMobile, contextHolder, changeDocumentTitle };
};

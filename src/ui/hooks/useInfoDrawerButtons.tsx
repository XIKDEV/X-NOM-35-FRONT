import { useDispatch } from 'react-redux';

export const useInfoDrawerButtons = () => {
  const dispatch: CallableFunction = useDispatch();

  const handleCloseDrawerForm = () => {
    import('../../store/forms').then(({ setCloseDrawerForm }) => {
      dispatch(setCloseDrawerForm());
    });
    import('../../store/users').then(({ setCleanUserActive }) => {
      dispatch(setCleanUserActive());
    });
    import('../../store/enterprises').then(({ setCleanEnterpriseActive }) => {
      dispatch(setCleanEnterpriseActive());
    });
  };

  return { handleCloseDrawerForm };
};

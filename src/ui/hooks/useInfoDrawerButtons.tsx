import { useDispatch } from 'react-redux';

export const useInfoDrawerButtons = () => {
  const dispatch: CallableFunction = useDispatch();

  const handleCloseDrawerForm = () => {
    import('../../store/forms').then(({ setCloseDrawerForm }) => {
      dispatch(setCloseDrawerForm());
    });
    import('../../store/users').then(({ setCleaneUserActive }) => {
      dispatch(setCleaneUserActive());
    });
  };

  return { handleCloseDrawerForm };
};

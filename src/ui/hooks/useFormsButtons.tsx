import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../interfaces';

export const useFormsButtons = () => {
  const { isLoading } = useSelector((state: RootState) => state.request);
  const dispatch: CallableFunction = useDispatch();

  const handleCloseDrawerForm = () => {
    import('../../store/forms').then(({ setCloseDrawerForm }) => {
      dispatch(setCloseDrawerForm());
    });
  };

  return { isLoading, handleCloseDrawerForm };
};

import { useDispatch } from 'react-redux';
import { useScreenSize } from '../../hooks';

export const useHeaderPage = (formAdd: string) => {
  const { isMobile } = useScreenSize();
  const dispatch: CallableFunction = useDispatch();

  const handleOpenDrawerForm = () => {
    import('../../store/forms').then(({ setOpenDrawerForm }) => {
      dispatch(setOpenDrawerForm(formAdd));
    });
  };

  return { isMobile, handleOpenDrawerForm };
};

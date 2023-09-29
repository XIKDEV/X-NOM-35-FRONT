import { useDispatch, useSelector } from 'react-redux';
import { IForms, RootState } from '../../interfaces';
import { useScreenSize } from '../../hooks';
import { FormUser } from '../../users/components';
import { FormEnterprise } from '../../enterprises/components';

export const useFormsDrawer = () => {
  const { isDrawerForm, isForm } = useSelector(
    (state: RootState) => state.forms
  );
  const { isMobile } = useScreenSize();
  const dispatch: CallableFunction = useDispatch();
  const handleCloseDrawerForm = () => {
    import('../../store/forms').then(({ setCloseDrawerForm }) => {
      dispatch(setCloseDrawerForm());
    });
  };

  const forms: IForms = {
    addUser: () => <FormUser />,
    editUser: () => '',
    deleteUser: () => '',
    addEnterprise: () => <FormEnterprise />,
    editEnterprise: () => '',
    deleteEnterprise: () => '',
    none: () => '',
  };

  return { isDrawerForm, isForm, isMobile, handleCloseDrawerForm, forms };
};

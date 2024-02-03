import { useDispatch, useSelector } from 'react-redux';
import { IForms, RootState } from '../../interfaces';
import { useScreenSize } from '../../hooks';
import { FormUser, InfoUser } from '../../users/components';
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
    none: () => '',

    addUser: () => <FormUser />,
    editUser: () => '',
    deleteUser: () => '',
    infoUser: () => <InfoUser />,

    addEnterprise: () => <FormEnterprise />,
    editEnterprise: () => '',
    deleteEnterprise: () => '',
    infoEnterprise: () => '',
  };

  return { isDrawerForm, isForm, isMobile, handleCloseDrawerForm, forms };
};

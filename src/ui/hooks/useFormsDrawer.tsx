import { useDispatch, useSelector } from 'react-redux';
import { FormUser, InfoUser } from '../../users/components';
import { FormEnterprise, InfoEnterprise } from '../../enterprises/components';
import { useScreenSize } from '../../hooks';
import { IForms, RootState } from '../../interfaces';

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
    import('../../store/users').then(({ setCleanUserActive }) => {
      dispatch(setCleanUserActive());
    });
    import('../../store/enterprises').then(({ setCleanEnterpriseActive }) => {
      dispatch(setCleanEnterpriseActive());
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
    infoEnterprise: () => <InfoEnterprise />,
  };

  return { isDrawerForm, isForm, isMobile, handleCloseDrawerForm, forms };
};

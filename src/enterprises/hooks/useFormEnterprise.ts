import { useDispatch, useSelector } from 'react-redux';
import { IFormFieldEnterprises, RootState } from '../../interfaces';

export const useFormEnterprise = () => {
  const dispatch: CallableFunction = useDispatch();
  const { modules } = useSelector((state: RootState) => state.catalogs);

  const handleSubmit = (values: IFormFieldEnterprises) => {
    import('../../store/enterprises').then(({ postEnterprise }) => {
      dispatch(postEnterprise(values));
    });
  };

  return {
    modules,
    handleSubmit,
  };
};

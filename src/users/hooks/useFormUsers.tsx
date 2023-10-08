import { useDispatch, useSelector } from 'react-redux';
import { IFormFieldUsers, RootState } from '../../interfaces';

export const useFormUsers = () => {
  const { modules } = useSelector((state: RootState) => state.catalogs);
  const dispatch: CallableFunction = useDispatch();
  const handleSubmit = (values: IFormFieldUsers) => {
    const { id_role, ...rest } = values;
    const data: IFormFieldUsers = {
      id_role: Number(id_role),
      ...rest,
    };
    import('../../store/users').then(({ postUser }) => {
      dispatch(postUser(data));
    });
  };

  return { modules, handleSubmit };
};

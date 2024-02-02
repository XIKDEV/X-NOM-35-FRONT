import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces';

export const useInfoUser = () => {
  const { userActive } = useSelector((state: RootState) => state.users);

  const dataList = [
    {
      concept: 'Nombre',
      info: `${userActive.name} ${userActive.lastname}`,
    },
    {
      concept: 'Email',
      info: userActive.email,
    },
    {
      concept: 'Rol',
      info: userActive.id_role.toString(),
    },
  ];

  return { dataList };
};

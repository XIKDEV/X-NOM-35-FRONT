import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces';

export const useInfoUser = () => {
  const { userActive } = useSelector((state: RootState) => state.users);
  const { modules } = useSelector((state: RootState) => state.catalogs);

  const role = modules.role.find(
    (role) => Number(role.value) === userActive.id_role
  );
  const roleLabel = role?.label;

  const userLogoEnterprise = userActive.id_enterprise.image;
  const userName = `${userActive.name} ${userActive.lastname}`;
  const associatedEnterprise = userActive.id_enterprise.business_name;

  const dataList = [
    {
      concept: 'Email',
      info: userActive.email,
    },
    {
      concept: 'Rol',
      info: roleLabel,
    },
  ];

  return { userLogoEnterprise, userName, associatedEnterprise, dataList };
};

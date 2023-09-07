import { FC } from 'react';
import { IInfoEnterpriseProps } from '../../interfaces';

export const InfoEnterprise: FC<IInfoEnterpriseProps> = ({
  addres,
  goals,
  activity,
  mainActivity,
  quantityEmployees,
}) => {
  return (
    <section className="info-enterprise">
      <p>{addres}</p>
      <p>{goals}</p>
      <p>{activity}</p>
      <p>{mainActivity}</p>
      <p>{quantityEmployees}</p>
    </section>
  );
};

import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces';

export const useInfoEnterprise = () => {
  const { enterpriseActive } = useSelector(
    (state: RootState) => state.enterprises
  );

  const dataList = [
    {
      concept: 'Empresa',
      info: `${enterpriseActive.business_name} (${enterpriseActive.comercial_name})`,
    },
    {
      concept: 'Representante legal',
      info: enterpriseActive.legal_representative,
    },
    {
      concept: 'Dirección',
      info: `${enterpriseActive.street} #${enterpriseActive.exterior_number}-${enterpriseActive.interior_number}, ${enterpriseActive.suburb}, C.P. ${enterpriseActive.postal_code}, ${enterpriseActive.municipality}, ${enterpriseActive.state}, ${enterpriseActive.country}`,
    },
    {
      concept: 'Tipo de empresa',
      info: enterpriseActive.enterprise_type,
    },
    {
      concept: 'Giro de la empresa',
      info: enterpriseActive.turnEnterprise,
    },
    {
      concept: 'Teléfono',
      info: enterpriseActive.tellphone,
    },
    {
      concept: 'Email',
      info: enterpriseActive.email,
    },
  ];

  return { dataList };
};

import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces';

export const useInfoEnterprise = () => {
  const { enterpriseActive } = useSelector(
    (state: RootState) => state.enterprises
  );
  const { modules } = useSelector((state: RootState) => state.catalogs);

  const state = modules.states.find(
    (state) => state.value === enterpriseActive.state
  );
  const stateLabel = state?.label;
  const city = state?.cities.find(
    (city) => city.value === enterpriseActive.city
  );
  const cityLabel = city?.label;

  const enterpriseLogo = enterpriseActive.image;
  const enterpriseName = {
    businessName: enterpriseActive.business_name,
    comercialName: enterpriseActive.comercial_name,
  };

  const dataList = [
    {
      concept: 'Representante legal',
      info: enterpriseActive.legal_representative,
    },
    {
      concept: 'Dirección',
      info: `${enterpriseActive.street} #${enterpriseActive.exterior_number}-${enterpriseActive.interior_number}, ${enterpriseActive.suburb}, C.P. ${enterpriseActive.postal_code}, ${cityLabel}, ${stateLabel}, ${enterpriseActive.country}`,
    },
    {
      concept: 'Tipo de empresa',
      info: enterpriseActive.enterprise_type,
    },
    {
      concept: 'Giro de la empresa',
      info: enterpriseActive.turn_enterprise,
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

  return { enterpriseName, enterpriseLogo, dataList };
};

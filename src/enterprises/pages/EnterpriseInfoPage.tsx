import { FC } from 'react';
import { Layout } from 'antd';
import { HeaderMobile } from '../../ui/components';
import {
  ContractsList,
  HeadEnterpriseInfo,
  InfoEnterprise,
} from '../components';
import { useScreenSize } from '../../hooks';
import { IEnterpriseInfoPageProps } from '../../interfaces';
import { enterpriseContentStyle } from '../ui';
import '../ui/enterpriseInfoPage.css';

const { Content } = Layout;

export const EnterpriseInfoPage: FC<IEnterpriseInfoPageProps> = ({
  handleSidebar,
}) => {
  const { isMobile } = useScreenSize();

  // //! TODO: temp info
  const enterpriseInfo = {
    enterpriseName: 'XikDev',
    addres: 'Agustín Lara #3251 Col. Miramar, Tijuana, Baja California, México',
    goals: 'Goals',
    activity: 'Industria Tec',
    mainActivity: 'Desarrollo de web',
    quantityEmployees: '2',
    contractsData: [
      {
        contract: 'Nom-contract',
        date: 'mm/aa - mm/aa',
      },
      {
        contract: 'Nom-contract',
        date: 'mm/aa - mm/aa',
      },
      {
        contract: 'Nom-contract',
        date: 'mm/aa - mm/aa',
      },
    ],
  };

  return (
    <>
      {isMobile ? <HeaderMobile handleSidebar={handleSidebar} /> : <></>}
      <HeadEnterpriseInfo enterpriseName={enterpriseInfo.enterpriseName} />
      {isMobile ? (
        <>
          <InfoEnterprise
            addres={enterpriseInfo.addres}
            goals={enterpriseInfo.goals}
            activity={enterpriseInfo.activity}
            mainActivity={enterpriseInfo.mainActivity}
            quantityEmployees={enterpriseInfo.quantityEmployees}
          />
          <ContractsList data={enterpriseInfo.contractsData} />
        </>
      ) : (
        <Content style={enterpriseContentStyle}>
          <InfoEnterprise
            addres={enterpriseInfo.addres}
            goals={enterpriseInfo.goals}
            activity={enterpriseInfo.activity}
            mainActivity={enterpriseInfo.mainActivity}
            quantityEmployees={enterpriseInfo.quantityEmployees}
          />
          <ContractsList data={enterpriseInfo.contractsData} />
        </Content>
      )}
    </>
  );
};

import { FC } from 'react';
import { Button, Card } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { InfoDrawerButtons } from '../../ui/components';
import { useInfoEnterprise } from '../hooks/useInfoEnterprise';
import { IInfoEnterpriseProps } from '../../interfaces';
import { formsButtonsStyles } from '../../ui/styles';
import '../ui/enterpriseInfoPage.css';

export const InfoEnterprise: FC<IInfoEnterpriseProps> = () => {
  const { enterpriseName, enterpriseLogo, dataList } = useInfoEnterprise();

  return (
    <Content>
      <section className="section-logo-name">
        <img
          src={enterpriseLogo}
          alt={`${enterpriseName.businessName} (${enterpriseName.comercialName})`}
        />

        <div>
          <h2>{enterpriseName.businessName}</h2>
          <h2>{enterpriseName.comercialName}</h2>
        </div>
      </section>

      <section className="info-cards">
        {dataList.map((item) => (
          <div
            key={`${item.concept} - ${item.info}`}
            className="info-cards-container"
          >
            <p>{item.concept}</p>
            <Card className="card">{item.info}</Card>
          </div>
        ))}
      </section>

      <Button
        htmlType="button"
        className="button-contracts"
        style={formsButtonsStyles}
      >
        Ver contratos
      </Button>

      <InfoDrawerButtons />
    </Content>
  );
};

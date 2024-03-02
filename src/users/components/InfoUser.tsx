import { FC } from 'react';
import { Card, Layout } from 'antd';
import { InfoDrawerButtons } from '../../ui/components';
import { useInfoUser } from '../hooks';
import { IInfoUserProps } from '../../interfaces';
import '../ui/userInfoPage.css';

const { Content } = Layout;

export const InfoUser: FC<IInfoUserProps> = () => {
  const { userLogoEnterprise, userName, associatedEnterprise, dataList } =
    useInfoUser();

  return (
    <Content>
      <section className="section-logo-name">
        <img
          src={userLogoEnterprise ? userLogoEnterprise : ''}
          alt={associatedEnterprise}
        />

        <div>
          <h2>{userName}</h2>
          <h2>{associatedEnterprise}</h2>
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

      <InfoDrawerButtons />
    </Content>
  );
};

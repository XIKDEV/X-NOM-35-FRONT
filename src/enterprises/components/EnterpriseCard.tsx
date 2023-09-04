import { FC } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ICardProps } from '../../interfaces';
import { enterprisesConstants } from '../../constants';
import { enterprisesCardBodyStyle, enterprisesMetaStyle } from '../ui';

export const EnterpriseCard: FC<ICardProps> = ({
  enterpriseName,
  responsible,
  logoEnterprise,
}) => {
  return (
    <Card
      className="card-enterprise br-8"
      hoverable
      bodyStyle={enterprisesCardBodyStyle}
      cover={
        <img
          alt={`${enterprisesConstants.logoFrom} ${enterpriseName}`}
          src={logoEnterprise}
        />
      }
    >
      <Meta
        title={
          <p className="card-labels" style={enterprisesMetaStyle.title}>
            {enterpriseName}
          </p>
        }
        description={
          <p className="card-labels" style={enterprisesMetaStyle.description}>
            {enterprisesConstants.responsibleEnterprise} {responsible}
          </p>
        }
      />
    </Card>
  );
};

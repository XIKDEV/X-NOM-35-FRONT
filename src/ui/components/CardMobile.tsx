import { FC } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ICardProps } from '../../interfaces';
import { enterprisesConstants } from '../../constants';
import { cardMobileBodyStyles } from '../styles';
import { enterprisesMetaStyle } from '../../enterprises/ui';

export const CardMobile: FC<ICardProps> = ({
  enterpriseName,
  responsible,
  logoEnterprise,
}) => {
  return (
    <Card className="card-mobile br-4" bodyStyle={cardMobileBodyStyles}>
      <img
        className="br-4"
        src={logoEnterprise}
        alt={`${enterprisesConstants.logoFrom} ${enterpriseName}`}
      />
      <Meta
        title={
          <p className="card-labels" style={enterprisesMetaStyle.titleMobile}>
            {enterpriseName}
          </p>
        }
        description={
          <p
            className="card-labels"
            style={enterprisesMetaStyle.descriptionMobile}
          >
            Responsable: {responsible}
          </p>
        }
      />
    </Card>
  );
};

import { FC } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ICardProps } from '../../interfaces';
import { enterprisesCardBodyStyle } from '../ui';
import { cardMetaStyle } from '../../ui/styles';

export const EnterprisesCard: FC<ICardProps> = ({
  srcImage,
  title,
  subtitle,
  alt,
}) => {
  return (
    <Card
      className="card-enterprise br-8"
      hoverable
      bodyStyle={enterprisesCardBodyStyle}
      cover={<img src={srcImage} alt={alt} />}
    >
      <Meta
        title={
          <p className="card-labels" style={cardMetaStyle.title}>
            {title}
          </p>
        }
        description={
          <p className="card-labels" style={cardMetaStyle.description}>
            {subtitle}
          </p>
        }
      />
    </Card>
  );
};

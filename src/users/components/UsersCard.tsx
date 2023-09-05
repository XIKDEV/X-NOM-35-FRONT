import { FC } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ICardProps } from '../../interfaces';
import { usersCardBodyStyle } from '../ui';
import { cardMetaStyle } from '../../ui/styles';

export const UsersCard: FC<ICardProps> = ({
  srcImage,
  title,
  subtitle,
  alt,
}) => {
  return (
    <Card className="card-user br-4" bodyStyle={usersCardBodyStyle}>
      <img className="br-4" src={srcImage} alt={alt} />
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

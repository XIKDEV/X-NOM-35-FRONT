import { FC } from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { ICardProps } from '../../interfaces';
import { cardMetaStyle, cardMobileBodyStyles } from '../styles';

export const CardMobile: FC<ICardProps> = ({
  srcImage,
  alt,
  title,
  subtitle,
  handleOpenDrawerInfo,
}) => {
  return (
    <Card
      className="card-mobile br-4"
      hoverable
      bodyStyle={cardMobileBodyStyles}
      onClick={handleOpenDrawerInfo}
    >
      <img className="br-4" src={srcImage} alt={alt} />
      <Meta
        title={
          <p className="card-labels" style={cardMetaStyle.titleMobile}>
            {title}
          </p>
        }
        description={
          <p className="card-labels" style={cardMetaStyle.descriptionMobile}>
            {subtitle}
          </p>
        }
      />
    </Card>
  );
};

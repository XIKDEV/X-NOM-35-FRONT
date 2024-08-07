import { FC } from 'react';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { IHeadEnterpriseInfoProps } from '../../interfaces';

const { Header } = Layout;

export const HeadEnterpriseInfo: FC<IHeadEnterpriseInfoProps> = ({
  img,
  alt,
  enterpriseName,
}) => {
  return (
    <Header className="header-enterprise">
      <img src={img} alt={alt} />
      <section className="header-title">
        <h1>{enterpriseName}</h1>
        <button>
          <FontAwesomeIcon icon={faPencil} className="edit-bttn" />
        </button>
      </section>
    </Header>
  );
};

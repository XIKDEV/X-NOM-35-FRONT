import { FC } from 'react';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { IHeaderUserInfoProps } from '../../interfaces';

const { Header } = Layout;

export const HeaderUserInfo: FC<IHeaderUserInfoProps> = ({
  img,
  alt,
  userName,
}) => {
  return (
    <Header className="header-user">
      <img src={img} alt={alt} />
      <section className="header-title">
        <h1>{userName}</h1>
        <button>
          <FontAwesomeIcon icon={faPencil} className="edit-bttn" />
        </button>
      </section>
    </Header>
  );
};

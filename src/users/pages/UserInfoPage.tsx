import { FC } from 'react';
import { HeaderUserInfo, InfoUser } from '../components';
import { HeaderMobile } from '../../ui/components';
import { useScreenSize } from '../../hooks';
import { IUserInfoPageProps } from '../../interfaces';
import '../ui/userInfoPage.css';

export const UserInfoPage: FC<IUserInfoPageProps> = ({ handleSidebar }) => {
  const { isMobile } = useScreenSize();

  //! TODO: temp info
  const userInfo = {
    userName: 'Axel Coronado Zepeda',
    img: '../../../public/_DSC7606.JPG',
    dataList: [
      {
        concept: 'Empresa',
        info: 'XikDev',
      },
      {
        concept: 'Email',
        info: 'axel.cor98@gmail.com',
      },
      {
        concept: 'Teléfono',
        info: '664-795-4898',
      },
      {
        concept: 'Rol',
        info: 'Super Admin',
      },
    ],
  };

  return (
    <>
      {isMobile ? <HeaderMobile handleSidebar={handleSidebar} /> : <></>}

      <HeaderUserInfo
        img={userInfo.img}
        alt={userInfo.userName}
        userName={userInfo.userName}
      />

      <InfoUser dataList={userInfo.dataList} isMobile={isMobile} />
    </>
  );
};

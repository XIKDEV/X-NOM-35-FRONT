import { FC } from 'react';
import { UsersCard } from '../components';
import { CardMobile, HeaderDesktop, HeaderMobile } from '../../ui/components';
import { useScreenSize } from '../../hooks';
import { IUsersPageProps } from '../../interfaces';
import { usersConstants } from '../../constants/usersConstants';
import '../ui/usersPage.css';

export const UsersPage: FC<IUsersPageProps> = ({ handleSidebar }) => {
  const { isMobile } = useScreenSize();

  //! TODO: temp info
  const userName = 'Axel Coronado';
  const role = 'Super Admin';
  const enterpriseUser = 'XikDev';
  const iconLogo = '../../../public/_DSC7606.JPG';

  return (
    <>
      {isMobile ? (
        <>
          <HeaderMobile
            handleSidebar={handleSidebar}
            data-testid="header-mobile"
          />

          <CardMobile
            srcImage={iconLogo}
            alt={`${usersConstants.userIs} ${userName}`}
            title={userName}
            subtitle={`${role}: ${enterpriseUser}`}
            data-testid="card-mobile"
          />
        </>
      ) : (
        <>
          <HeaderDesktop data-testid="header-desktop" />

          <section className="grid-users-cards">
            <UsersCard
              srcImage={iconLogo}
              alt={`Usuario: ${userName}`}
              title={userName}
              subtitle={`${role}: ${enterpriseUser}`}
              data-testid="card-desktop"
            />
          </section>
        </>
      )}
    </>
  );
};

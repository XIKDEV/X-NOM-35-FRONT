import { FC } from 'react';
import { useSelector } from 'react-redux';
import { UsersCard } from '../components';
import { CardMobile, HeaderDesktop, HeaderMobile } from '../../ui/components';
import { useUsersPage } from '../hooks';
import { useScreenSize } from '../../hooks';
import { IUsersPageProps, RootState } from '../../interfaces';
import { usersConstants } from '../../constants';
import '../ui/usersPage.css';

export const UsersPage: FC<IUsersPageProps> = ({ handleSidebar }) => {
  const { contextHolder } = useUsersPage();
  const { users } = useSelector((state: RootState) => state.users);
  const { isMobile } = useScreenSize();

  //! TODO: temp info
  const iconLogo = '../../../public/XIK_VerdeTransparente.png';

  return (
    <>
      {contextHolder}
      {isMobile ? (
        <>
          <HeaderMobile
            handleSidebar={handleSidebar}
            data-testid="header-mobile"
          />

          {users.map((user) => (
            <CardMobile
              key={user.id}
              srcImage={iconLogo}
              alt={`${usersConstants.userIs} ${user.name} ${user.lastname}`}
              title={`${user.name} ${user.lastname}`}
              subtitle={`${usersConstants.roleIs} ${user.id_role}`}
              data-testid="card-mobile"
            />
          ))}
        </>
      ) : (
        <>
          <HeaderDesktop data-testid="header-desktop" />

          <section className="grid-users-cards">
            {users.map((user) => (
              <UsersCard
                key={user.id}
                srcImage={iconLogo}
                alt={`${usersConstants.userIs} ${user.name} ${user.lastname}`}
                title={`${user.name} ${user.lastname}`}
                subtitle={`${usersConstants.roleIs} ${user.id_role}`}
                data-testid="card-desktop"
              />
            ))}
          </section>
        </>
      )}
    </>
  );
};

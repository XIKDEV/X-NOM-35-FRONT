import { FC } from 'react';
import { UsersCard } from '../components';
import { CardMobile, HeaderPage } from '../../ui/components';
import { useUsersPage } from '../hooks';
import { IUsersPageProps } from '../../interfaces';
import { usersConstants } from '../../constants';
import '../ui/usersPage.css';

export const UsersPage: FC<IUsersPageProps> = ({ handleSidebar }) => {
  const { users, isMobile, contextHolder } = useUsersPage();

  //! TODO: temp info
  const iconLogo = '../../../public/XIK_VerdeTransparente.png';

  return (
    <>
      {contextHolder}

      <HeaderPage
        handleSidebar={handleSidebar}
        data-testid="header-desktop"
        formAdd="addUser"
      />
      {isMobile ? (
        <>
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

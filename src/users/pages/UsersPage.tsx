import { FC } from 'react';
import { UsersCard } from '../components';
import { CardMobile, HeaderPage } from '../../ui/components';
import { useUsersPage } from '../hooks';
import { IUsersPageProps } from '../../interfaces';
import { usersConstants } from '../../constants';
import '../ui/usersPage.css';

export const UsersPage: FC<IUsersPageProps> = ({ handleSidebar }) => {
  const { usersList, isMobile, contextHolder, handleOpenDrawerInfoUser } =
    useUsersPage();

  return (
    //! TODO: Arreglar grid
    <>
      {contextHolder}

      <HeaderPage
        handleSidebar={handleSidebar}
        data-testid="header-desktop"
        formAdd="addUser"
      />
      {isMobile ? (
        <>
          {usersList.map((user) => (
            <CardMobile
              key={user.id}
              srcImage={user.id_enterprise.image}
              alt={`${usersConstants.representEnterprise} ${user.id_enterprise.business_name}`}
              title={`${user.name} ${user.lastname}`}
              subtitle={`${usersConstants.roleIs} ${user.roleLabel}`}
              handleOpenDrawerInfo={() => {
                handleOpenDrawerInfoUser(user);
              }}
              data-testid="card-mobile"
            />
          ))}
        </>
      ) : (
        <>
          <section className="grid-users-cards">
            {usersList.map((user) => (
              <UsersCard
                key={user.id}
                srcImage={user.id_enterprise.image}
                alt={`${usersConstants.representEnterprise} ${user.id_enterprise.business_name}`}
                title={`${user.name} ${user.lastname}`}
                subtitle={`${usersConstants.roleIs} ${user.roleLabel}`}
                handleOpenDrawerInfo={() => {
                  handleOpenDrawerInfoUser(user);
                }}
                data-testid="card-desktop"
              />
            ))}
          </section>
        </>
      )}
    </>
  );
};

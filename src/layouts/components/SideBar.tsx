import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonSidebar } from '.';
import { ISideBarProps, RootState } from '../../interfaces';
import { layoutConstants } from '../../constants';

export const SideBar: FC<ISideBarProps> = ({
  isMobile,
  isCollapse,
  handleSidebar,
}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch: CallableFunction = useDispatch();
  const handleLogout = () => {
    import('../../store/auth').then(({ setAuthLogout }) => {
      dispatch(setAuthLogout());
    });
  };

  return (
    <div className="sider-content flex-column-center space-between">
      {isMobile ? (
        <></>
      ) : (
        <button
          className="sidebar-open-close"
          onClick={handleSidebar}
          style={{ right: isCollapse ? '' : '0px' }}
          data-testid="sidebar-open-close"
        >
          <FontAwesomeIcon
            icon={isCollapse ? faArrowRight : faArrowLeft}
            style={{ transition: 'all 0.2s ease-in-out' }}
          />
        </button>
      )}

      <img
        className={`sidebar-logo ${
          isCollapse ? 'logo-collapse' : 'logo-expand'
        }`}
        src="../../../public/XIK_VerdeTransparente.png"
        alt="XikDev"
        data-testid="sidebar-logo"
      />

      <section
        className="sider-navigation flex-column-center"
        data-testid="sider-navigation"
      >
        {user.id_role.roleModule.map((item) => {
          const navigation = `/nom035${item.route}`;
          console.log(navigation);
          return (
            <ButtonSidebar
              key={item.id}
              navigationTo={navigation}
              onClick={isMobile ? handleSidebar : () => {}}
              textBttn={
                item.component === 'usuario'
                  ? layoutConstants.users
                  : layoutConstants.enterprises
              }
              icon={item.component === 'usuario' ? faUser : faBuilding}
              isCollapse={isCollapse}
            />
          );
        })}
      </section>

      <section
        className="sider-logout flex-column-center"
        data-testid="sider-logout"
      >
        <ButtonSidebar
          navigationTo=""
          onClick={handleLogout}
          textBttn={layoutConstants.logout}
          icon={faPowerOff}
          isCollapse={isCollapse}
        />
      </section>
    </div>
  );
};

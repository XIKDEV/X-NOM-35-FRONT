import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { ButtonSidebar } from '.';
import { ISideBar } from '../../interfaces';
import { layoutConstants } from '../../constants';

export const SideBar: FC<ISideBar> = ({
  isMobile,
  isCollapse,
  handleSidebar,
}) => {
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
        <ButtonSidebar
          navigationTo="/nom035/enterprises"
          onClick={() => {}}
          textBttn={layoutConstants.enterprises}
          icon={faBuilding}
          isCollapse={isCollapse}
        />
        <ButtonSidebar
          navigationTo="/nom035/users"
          onClick={() => {}}
          textBttn={layoutConstants.users}
          icon={faUser}
          isCollapse={isCollapse}
        />
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

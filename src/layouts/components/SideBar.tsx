import { ButtonSidebar } from '.';
import {
  faBuilding,
  faPowerOff,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { layoutConstants } from '../../constants';
import '../ui/layouts.css';

export const SideBar = () => {
  return (
    <aside className="sidebar flex-column-center">
      <img
        className="sidebar-logo"
        src="../../../public/XIK_VerdeTransparente.png"
        alt="XikDev"
      />

      <section className="sidebar-nav sidebar-bttns flex-column-center">
        <ButtonSidebar
          icon={faBuilding}
          textBttn={layoutConstants.enterprises}
        />
        <ButtonSidebar icon={faUser} textBttn={layoutConstants.users} />
      </section>

      <section className="sidebar-logout sidebar-bttns">
        <ButtonSidebar icon={faPowerOff} textBttn={layoutConstants.logout} />
      </section>
    </aside>
  );
};

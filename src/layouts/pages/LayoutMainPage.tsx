import { Drawer, Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { SideBar } from '../components';
import { useLayoutMainPage } from '../hooks';
import { useScreenSize } from '../../hooks';
import { ILayoutMainPageProps } from '../../interfaces';
import { drawerStyles, siderStyles } from '../ui';
import '../ui/layouts.css';

const { Content, Header, Sider } = Layout;

export const LayoutMainPage: React.FC<ILayoutMainPageProps> = ({
  page: Page,
}) => {
  const { isCollapse, handleSidebar } = useLayoutMainPage();
  const { isMobile } = useScreenSize();

  const sideBarProps = {
    isMobile,
    isCollapse,
    handleSidebar,
  };
  const sideBarComponent = <SideBar {...sideBarProps} />;

  return (
    <Layout style={{ maxHeight: '100vh' }}>
      {isMobile ? (
        <Drawer
          open={!isCollapse}
          onClose={handleSidebar}
          closable={false}
          placement={drawerStyles.placement}
          width={drawerStyles.width}
          bodyStyle={drawerStyles.bodyStyle}
          data-testid="drawer"
        >
          {sideBarComponent}
        </Drawer>
      ) : (
        <Sider
          className="flex-column-center space-between"
          style={siderStyles}
          width={186}
          collapsedWidth={64}
          collapsed={isCollapse}
          data-testid="sider"
        >
          {sideBarComponent}
        </Sider>
      )}

      <Content className="content-layout">
        {isMobile ? (
          <Header className="nav flex-row-center space-between">
            <button onClick={handleSidebar} data-testid="sidebar-toggle-button">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <input className="br-4" type="text" placeholder="Búsqueda rápida" />
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Header>
        ) : (
          <></>
        )}
        <Page />
      </Content>
    </Layout>
  );
};

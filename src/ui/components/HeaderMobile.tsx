import { FC } from 'react';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IHeaderMobileProps } from '../../interfaces';
import { uiConstants } from '../../constants';

const { Header } = Layout;

export const HeaderMobile: FC<IHeaderMobileProps> = ({ handleSidebar }) => {
  return (
    <>
      <Header className="header-mobile flex-row-center space-between">
        <button onClick={handleSidebar} data-testid="sidebar-toggle-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <input
          className="br-4"
          type="text"
          placeholder={uiConstants.inputQuickSearchPlaceholder}
        />
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </Header>
    </>
  );
};

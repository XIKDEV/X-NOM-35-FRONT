import { FC } from 'react';
import { Input, Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormsDrawer } from './FormsDrawer';
import { IHeaderPageProps } from '../../interfaces';
import { uiConstants } from '../../constants';
import { useHeaderPage } from '../hooks';

const { Header } = Layout;

export const HeaderPage: FC<IHeaderPageProps> = ({
  handleSidebar,
  formAdd,
}) => {
  const { isMobile, handleOpenDrawerForm } = useHeaderPage(formAdd);
  return (
    <div>
      <Header className="header-page flex-row-center justify-end">
        {isMobile ? (
          <button onClick={handleSidebar} data-testid="sidebar-toggle-button">
            <FontAwesomeIcon icon={faBars} />
          </button>
        ) : (
          <></>
        )}
        <Input
          className="header-page-input br-8"
          placeholder={uiConstants.inputQuickSearchPlaceholder}
          allowClear
          bordered={false}
        />
        <button onClick={handleOpenDrawerForm} className="br-8">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </Header>

      <FormsDrawer />
    </div>
  );
};

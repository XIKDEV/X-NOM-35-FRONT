import { Input, Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { uiConstants } from '../../constants';

const { Header } = Layout;

export const HeaderDesktop = () => {
  return (
    <Header className="header-desktop flex-row-center justify-end">
      <Input
        className="header-desktop-input br-8"
        placeholder={uiConstants.inputQuickSearchPlaceholder}
        allowClear
        bordered={false}
      />
      <button className="br-8">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </Header>
  );
};

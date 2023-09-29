import { Drawer } from 'antd';
import { useFormsDrawer } from '../hooks';
import { uiConstants } from '../../constants';
import { formsDrawerStyles, headerFormsDrawerStyles } from '../styles';

export const FormsDrawer = () => {
  const { isDrawerForm, isForm, isMobile, handleCloseDrawerForm, forms } =
    useFormsDrawer();

  return (
    <Drawer
      title={uiConstants[isForm]}
      width={isMobile ? '100%' : 420}
      onClose={handleCloseDrawerForm}
      open={isDrawerForm}
      style={formsDrawerStyles}
      headerStyle={headerFormsDrawerStyles}
    >
      {forms[isForm]()}
    </Drawer>
  );
};

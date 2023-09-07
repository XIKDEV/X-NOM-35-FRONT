import { IDrawerStyles, ILayoutStyle, ISiderStyles } from '../../interfaces';

export const layoutStyle: ILayoutStyle = {
  maxHeight: '100vh',
};

export const drawerStyles: IDrawerStyles = {
  placement: 'left',
  width: 'min(50%, 176px)',
  bodyStyle: {
    backgroundColor: 'var(--dark)',
  },
};

export const siderStyles: ISiderStyles = {
  position: 'relative',
  height: '100vh',
  overflow: 'auto',
  left: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'var(--dark)',
};

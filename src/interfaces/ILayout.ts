import { FC } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IEnterprisesPageProps } from './IEnterprises';

export interface ILayoutConstants {
  enterprises: string;
  users: string;
  logout: string;
}

export interface ILayoutMainPageProps {
  page: FC<IEnterprisesPageProps>;
}

export interface ILayoutStyle {
  maxHeight: string;
}

export interface IDrawerStyles {
  placement: 'left' | 'right' | 'top' | 'bottom';
  width: string;
  bodyStyle: IDrawerStylesBodyStyles;
}

export interface IDrawerStylesBodyStyles {
  backgroundColor: string;
}

export interface ISiderStyles {
  position: 'relative' | 'absolute' | 'fixed' | 'static' | 'sticky';
  height: string;
  overflow: string;
  left: number;
  top: number;
  bottom: number;
  backgroundColor: string;
}

export interface ISideBar {
  isMobile: boolean;
  isCollapse: boolean;
  handleSidebar: () => void;
}

export interface IButtonSidebar {
  navigationTo: string;
  textBttn: string;
  icon: IconDefinition;
  isCollapse: boolean;
}

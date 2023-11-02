import { FC } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IEnterprisesPageProps } from './IEnterprises';
import { IUsersPageProps } from './IUsers';

export interface ILayoutConstants {
  enterprises: string;
  users: string;
  logout: string;
}

export interface ILayoutMainPageProps {
  page: FC<IEnterprisesPageProps> | FC<IUsersPageProps>;
}

export interface ISideBarProps {
  isMobile: boolean;
  isCollapse: boolean;
  handleSidebar: () => void;
}

export interface IButtonSidebarProps {
  navigationTo: string;
  onClick: () => void;
  textBttn: string;
  icon: IconDefinition;
  isCollapse: boolean;
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

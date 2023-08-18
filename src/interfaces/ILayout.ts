import { FC } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ILayoutConstants {
  enterprises: string;
  users: string;
  logout: string;
}

export interface ILayoutMainPageProps {
  page: FC;
}

export interface IButtonSidebar {
  textBttn: string;
  icon: IconDefinition;
}

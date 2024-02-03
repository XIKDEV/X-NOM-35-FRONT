export interface IUsersConstants {
  titlePage: string;

  userIs: string;
  roleIs: string;
}

export interface IUsersPlaceholders {
  name: string;
  lastname: string;
  email: string;
  role: string;
}

export interface IUsersPageProps {
  handleSidebar: () => void;
}

export interface IUserInfoPageProps {
  handleSidebar: () => void;
}

export interface IUsersCardBodyStyle {
  padding: number;
  height: string;
  display: string;
  alignItems: string;
}

export interface IHeaderUserInfoProps {
  img: string;
  alt: string;
  userName: string;
}

export interface IInfoUserProps {}
export interface IDataItem {
  concept: string;
  info: string;
}

export interface IFormFieldUsers {
  name: string;
  lastname: string;
  email: string;
  id_role: string | number;
}

export interface IInfoUserListItemStyle {
  color: string;
  textAlign: TextAlignType;
  paddingBottom: string;
  fontSize: string;
}

export type TextAlignType = 'center' | 'left' | 'right';

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

export interface IInfoUserProps {
  dataList: IDataItem[];
  isMobile: boolean;
}
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
  borderColor: string;
}

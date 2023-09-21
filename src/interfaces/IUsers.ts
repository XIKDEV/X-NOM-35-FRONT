export interface IUsersConstants {
  titlePage: string;

  userIs: string;
  roleIs: string;
}

export interface IUsersPageProps {
  handleSidebar: () => void;
}

export interface IUsersCardBodyStyle {
  padding: number;
  height: string;
  display: string;
  alignItems: string;
}

export interface IUserInfoPageProps {
  handleSidebar: () => void;
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

export interface IInfoUserListItemStyle {
  color: string;
  borderColor: string;
}
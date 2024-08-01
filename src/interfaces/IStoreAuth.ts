export interface IStoreAuthInitialState {
  user: IDataUser;
  auth: IAuthStatus;
}

type IAuthStatus = 'not-auth' | 'auth' | 'checking';

export interface IDataUser extends IUser {
  token: string;
}

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  email: string;
  id_role: IIDRole;
}

export interface IIDRole {
  id: string;
  role: string;
  description: string;
  roleModule: IRoleModules[];
}

export interface IRoleModule {
  id: number;
  id_module: IIDModule;
  roleModulePermission: IRoleModulePermission[];
}

export interface IIDModule {
  id: number;
  route: string;
  module: string;
  icon: null;
  menu_option: null;
  component: string;
}

export interface IRoleModulePermission {
  id: number;
  id_permission: IIDPermission;
}

export interface IIDPermission {
  id: string;
  permission: string;
  description: string;
}

export interface IRoleModules {
  id: number;
  route: string;
  module: string;
  icon: null;
  menu_option: null;
  component: string;
  permission: Permission;
}

export interface Permission {
  create: boolean;
  update: boolean;
  read: boolean;
  delete: boolean;
}

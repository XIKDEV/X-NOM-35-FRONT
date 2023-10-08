export interface IAuthSliceInitialState {
  user: IDataUser | object;
  auth: IAuthStatus;
}

type IAuthStatus = 'not-auth' | 'auth' | 'checking';

export interface IDataUser {
  user: IUser;
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
  roleModule: IRoleModule[];
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

// export interface ILoginData {
//   email: string;
//   password: string;
// }

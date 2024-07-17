import { IDataUser } from './IStoreAuth';
import { IModules } from './IStoreCatalogs';
import { IEnterprises } from './IStoreEnterprises';
import { IUsers } from './IStoreUsers';

export interface IHttpAdapterHeader {
  auth?: string;
  content?: string;
}

export interface IHttpAdapterResponseData {
  success: boolean;
  data: DataType;
  info: object;
  message: string;
}

export interface IAuth {
  user: IUsers[];
  token: string;
}

export type DataType = IDataUser &
  IUsers[] &
  IUsers &
  IEnterprises[] &
  IEnterprises &
  IModules &
  IAuth;

export interface ISublink {
  user: string;
  auth: string;
  validJwt: string;
  roles: string;
  enterprise: string;
  catalogs: string;
  default: string;
}

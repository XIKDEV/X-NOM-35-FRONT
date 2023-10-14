import { IDataUser } from './IStoreAuth';

export interface IHttpAdapterHeader {
  auth?: string;
  content?: string;
}

export interface IHttpAdapterResponseData {
  success: boolean;
  data: IDataUser;
  info: object;
  message: string;
}

export interface ISublink {
  user: string;
  auth: string;
  validJwt: string;
  roles: string;
  enterprise: string;
  catalogs: string;
  default: string;
}

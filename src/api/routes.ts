import { ISublink } from '../interfaces';

export const sublink: ISublink = {
  user: 'user',
  auth: 'auth',
  validJwt: 'auth/valid/JWT',
  roles: 'roles',
  enterprise: 'enterprise',
  catalogs: 'catalog/get-catalogs',
  default: 'module',
};

export const content: string = 'application/x-www-form-urlencoded';

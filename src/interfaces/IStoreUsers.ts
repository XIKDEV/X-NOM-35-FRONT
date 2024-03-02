import { IEnterprises } from '.';

export interface IStoreUsersInitialState {
  users: IUsers[];
  userActive: IUsers;
}
export interface IUsers {
  id: number;
  name: string;
  lastname: string;
  email: string;
  id_enterprise: IEnterprises;
  id_role: string | number;
  roleLabel?: string | number;
}

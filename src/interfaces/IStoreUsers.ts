export interface IStoreUsersInitialState {
  users: IUsers[];
}
export interface IUsers {
  id: number;
  name: string;
  lastname: string;
  email: string;
  id_role: string;
}

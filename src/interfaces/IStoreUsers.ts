export interface IStoreUsers {
  users: IUsers[];
}
export interface IUsers {
  id: number;
  name: string;
  lastname: string;
  email: string;
  id_role: string;
}

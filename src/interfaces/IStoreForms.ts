export interface IStoreFormsInitialState {
  isDrawerForm: boolean;
  isForm: FormType;
}
export type FormType =
  | 'none'
  | 'addUser'
  | 'editUser'
  | 'deleteUser'
  | 'infoUser'
  | 'addEnterprise'
  | 'editEnterprise'
  | 'deleteEnterprise'
  | 'infoEnterprise';

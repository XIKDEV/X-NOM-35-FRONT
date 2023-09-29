export interface IStoreForms {
  isDrawerForm: boolean;
  isForm: FormType;
}
export type FormType =
  | 'none'
  | 'addUser'
  | 'editUser'
  | 'deleteUser'
  | 'addEnterprise'
  | 'editEnterprise'
  | 'deleteEnterprise';

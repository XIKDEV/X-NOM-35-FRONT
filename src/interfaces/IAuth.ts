export interface IAuthConstants {
  titlePage: string;
  bttnLogin: string;

  placeholderEmail: string;
  placeholderPassword: string;

  emailWarning: string;
  emailWrongFormat: string;
  passwordWarning: string;
}

export interface IFormFieldType {
  email?: string;
  password?: string;
}

export interface IRulesInputEmail {
  required: boolean;
  message: string;
}

export interface ILoginInput {
  boxShadow: string;
  borderColor: string;
}

export interface ILoginButton {
  color: string;
}

export interface IRulesInputPassword {
  required: boolean;
  message: string;
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

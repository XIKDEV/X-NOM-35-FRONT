import {
  IAuthConstants,
  IRulesInputEmail,
  IRulesInputPassword,
} from '../interfaces';

export const authConstants: IAuthConstants = {
  titlePage: 'Bienvenido a X Nom-035',
  bttnLogin: 'Iniciar sesión',

  placeholderEmail: 'Email',
  placeholderPassword: 'Contraseña',

  emailWarning: 'Ingresa tu email',
  emailWrongFormat: 'Por favor, ingrese un email válido',
  passwordWarning: 'Ingresa tu contraseña',
};

export const rulesInputEmail: IRulesInputEmail = {
  required: true,
  message: authConstants.emailWarning,
};

export const rulesInputPassword: IRulesInputPassword = {
  required: true,
  message: authConstants.passwordWarning,
};

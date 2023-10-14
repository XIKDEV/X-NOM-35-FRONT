import {
  IInfoUserListItemStyle,
  IUsersConstants,
  IUsersPlaceholders,
} from '../interfaces';

export const usersConstants: IUsersConstants = {
  titlePage: 'X Nom-035 - Usuarios',

  userIs: 'Usuario:',
  roleIs: 'Rol: ',
};

export const usersPlaceholders: IUsersPlaceholders = {
  name: 'Nombre',
  lastname: 'Apellido',
  email: 'Email',
  role: 'Role',
};

export const infoUserListItemStyle: IInfoUserListItemStyle = {
  color: 'var(--gray)',
  borderColor: 'var(--primary)',
};

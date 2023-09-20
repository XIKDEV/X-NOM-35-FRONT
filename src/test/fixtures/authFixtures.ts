import { IAuthSliceInitialState } from '../../interfaces';

export const initialStateAuth: IAuthSliceInitialState = {
  user: {},
  auth: 'not-auth',
};

export const noAuthState: IAuthSliceInitialState = {
  user: {},
  auth: 'not-auth',
};

export const checkingState: IAuthSliceInitialState = {
  user: {},
  auth: 'checking',
};

export const authState: IAuthSliceInitialState = {
  user: {
    id: 2,
    name: 'Axel',
    lastname: 'Coronado',
    email: 'axelcor98@gmail.com',
    id_role: {
      id: '1',
      role: 'Desarrollador',
      description: 'Can see and do everything',
      roleModule: [
        {
          id: 1,
          id_module: {
            id: 1,
            route: '/usuarios',
            module: 'User',
            icon: null,
            menu_option: null,
            component: 'usuario',
          },
          roleModulePermission: [
            {
              id: 3,
              id_permission: {
                id: '1',
                permission: 'Create',
                description: 'Can create registers\n',
              },
            },
            {
              id: 4,
              id_permission: {
                id: '2',
                permission: 'Read',
                description: 'Can read one or all registers\n',
              },
            },
            {
              id: 5,
              id_permission: {
                id: '3',
                permission: 'Update',
                description: 'Can update registers',
              },
            },
            {
              id: 6,
              id_permission: {
                id: '4',
                permission: 'Delete',
                description: 'Can delete registers\n',
              },
            },
          ],
        },
      ],
    },
  },
  auth: 'auth',
};

export const userDemo = {
  id: 2,
  name: 'Axel',
  lastname: 'Coronado',
  email: 'axelcor98@gmail.com',
  id_role: {
    id: '1',
    role: 'Desarrollador',
    description: 'Can see and do everything',
    roleModule: [
      {
        id: 1,
        id_module: {
          id: 1,
          route: '/usuarios',
          module: 'User',
          icon: null,
          menu_option: null,
          component: 'usuario',
        },
        roleModulePermission: [
          {
            id: 3,
            id_permission: {
              id: '1',
              permission: 'Create',
              description: 'Can create registers\n',
            },
          },
          {
            id: 4,
            id_permission: {
              id: '2',
              permission: 'Read',
              description: 'Can read one or all registers\n',
            },
          },
          {
            id: 5,
            id_permission: {
              id: '3',
              permission: 'Update',
              description: 'Can update registers',
            },
          },
          {
            id: 6,
            id_permission: {
              id: '4',
              permission: 'Delete',
              description: 'Can delete registers\n',
            },
          },
        ],
      },
    ],
  },
};

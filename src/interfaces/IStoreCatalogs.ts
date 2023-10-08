export interface IStoreCatalogsInitialState {
  modules: IModules;
}

export interface IModules {
  role: IRole[];
}

export interface IRole {
  value: string;
  label: string;
}

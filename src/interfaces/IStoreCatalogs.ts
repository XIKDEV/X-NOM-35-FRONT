export interface IStoreCatalogsInitialState {
  modules: IModules;
}

export interface IModules {
  role: IRole[];
  states: IStates[];
}

export interface IRole {
  value: string | number;
  label: string;
}

export interface IStates {
  value: number;
  label: string;
  cities: ICity[];
}

export interface ICity {
  value: number;
  label: string;
}

export interface ICitiesArray {
  'Baja California': string[];
  'Baja California Sur': string[];
}

export interface IStoreCatalogsInitialState {
  modules: IModules;
}

export interface IModules {
  role: IRole[];
  states: IStates;
}

export interface IRole {
  value: string;
  label: string;
}

export interface IStates {
  statesArray: string[];
  citiesArray: ICitiesArray;
}

export interface ICitiesArray {
  'Baja California': string[];
  'Baja California Sur': string[];
}

export interface IStoreEnterprisesInitialState {
  enterprises: IEnterprises[];
  enterpriseActive: IEnterprises;
}

export interface IEnterprises {
  id: number;
  business_name: string;
  comercial_name: string;
  legal_representative: string;
  RFC: string;
  street: string;
  exterior_number: string;
  interior_number: string;
  suburb: string;
  postal_code: number;
  country: string;
  id_city: IIDCity;
  id_state: IIDState;
  enterprise_type: string;
  turn_enterprise: string;
  tellphone: string;
  email: string;
  image: string;
}

export interface IIDCity {
  id: number;
  name: string;
}
export interface IIDState {
  id: number;
  code: string;
  name: string;
}

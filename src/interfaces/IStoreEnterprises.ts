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
  exterior_number: string;
  interior_number: string;
  suburb: string;
  postal_code: number;
  street: string;
  city: number;
  state: number;
  country: string;
  enterprise_type: string;
  turn_enterprise: string;
  tellphone: string;
  email: string;
  image: string;
}

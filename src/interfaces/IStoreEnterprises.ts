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
  state: string;
  municipality: string;
  country: string;
  enterprise_type: string;
  turnEnterprise: string;
  tellphone: string;
  email: string;
  image: string;
}

export interface IStoreEnterprisesInitialState {
  enterprises: IEnterprises[];
}

export interface IEnterprises {
  enterpriseId: number;
  bussinessName: string;
  comercialName: string;
  legal_representative: string;
  rfc: string;
  street: string;
  exteriorNumber: string;
  interiorNumber: string;
  suburb: string;
  postalCode: number;
  state: string;
  municipality: string;
  country: string;
  enterpriseType: string;
  turnEnterprise: string;
  tellphone: string;
  email: string;
}

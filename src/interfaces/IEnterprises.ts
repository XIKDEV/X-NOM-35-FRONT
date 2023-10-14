export interface IEnterprisesConstants {
  titlePage: string;

  logoFrom: string;
  responsibleEnterprise: string;
}

export interface IEnterprisesPlaceholders {
  bussinessName: string;
  comercialName: string;
  legalRepresentative: string;
  RFC: string;
  street: string;
  exteriorNumber: string;
  interiorNumber: string;
  suburb: string;
  postalCode: string;
  state: string;
  municipality: string;
  country: string;
  enterpriseType: string;
  turnEnterprise: string;
  tellphone: string;
  email: string;
  file: string;
}

export interface IEnterprisesPageProps {
  handleSidebar: () => void;
}

export interface IEnterpriseCardBodyStyle {
  padding: string;
}

export interface IEnterpriseInfoPageProps {
  handleSidebar: () => void;
}

export interface IEnterpriseContentStyle {
  width: string;
  height: string;
  marginTop: string;
  display: string;
}

export interface IHeadEnterpriseInfoProps {
  img: string;
  alt: string;
  enterpriseName: string;
}

export interface IInfoEnterpriseProps {
  addres: string;
  goals: string;
  activity: string;
  mainActivity: string;
  quantityEmployees: string;
}

export interface IContractsListProps {
  data: IContract[];
  isMobile: boolean;
}

export interface IContract {
  contract: string;
  date: string;
}

export interface IListContractsStyle {
  width: string;
}

export interface IListItemContractsStyle {
  padding: string;
  border: string;
}

export interface IBodyContractStyle {
  height: string;
  padding: string;
  display: string;
  alignItems: string;
}

export interface IFormFieldEnterprises {
  business_name: string;
  comercial_name: string;
  legal_representative: string;
  RFC: string;
  street: string;
  exterior_number: string;
  interior_number: string;
  suburb: string;
  postal_code: string;
  id_state: string;
  id_city: string;
  country: string;
  enterprise_type: string;
  turn_enterprise: string;
  tellphone: string;
  email: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any;
}

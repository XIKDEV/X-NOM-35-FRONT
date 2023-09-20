export interface IEnterprisesConstants {
  titlePage: string;

  logoFrom: string;
  responsibleEnterprise: string;
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

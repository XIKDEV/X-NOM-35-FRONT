import {
  IBodyContractStyle,
  IEnterpriseCardBodyStyle,
  IEnterpriseContentStyle,
  IListContractsStyle,
  IListItemContractsStyle,
} from '../../interfaces';

export const enterprisesCardBodyStyle: IEnterpriseCardBodyStyle = {
  padding: '12px',
};

export const enterpriseContentStyle: IEnterpriseContentStyle = {
  width: '100%',
  height: 'calc(68%)',
  marginTop: '36px',
  display: 'flex',
};

export const listContractsStyleMobile: IListContractsStyle = {
  width: '100%',
};

export const listContractsStyleDesktop: IListContractsStyle = {
  width: 'calc(100% - 126px)',
};

export const listItemContractsStyle: IListItemContractsStyle = {
  padding: '8px',
  border: 'none',
};

export const bodyContractStyle: IBodyContractStyle = {
  height: '34px',
  padding: ' 0px 12px',
  display: 'flex',
  alignItems: 'center',
};

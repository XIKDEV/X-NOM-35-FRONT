import {
  IEnterpriseCardBodyStyle,
  IEnterprisesMetaStyle,
} from '../../interfaces';

export const enterprisesCardBodyStyle: IEnterpriseCardBodyStyle = {
  padding: '12px',
};

export const enterprisesMetaStyle: IEnterprisesMetaStyle = {
  title: {
    fontSize: 'var(--text)',
  },
  titleMobile: {
    fontSize: 'var(--text-small)',
  },
  description: {
    fontSize: 'var(--subtext)',
  },
  descriptionMobile: {
    fontSize: 'var(--subtext-small)',
  },
};

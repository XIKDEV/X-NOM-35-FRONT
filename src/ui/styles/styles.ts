import { ICardMetaStyle, ICardMobileBodyStyles } from '../../interfaces';

export const cardMobileBodyStyles: ICardMobileBodyStyles = {
  padding: 0,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
};

export const cardMetaStyle: ICardMetaStyle = {
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

import {
  ICardMetaStyle,
  ICardMobileBodyStyles,
  IFormsButtonsStyles,
  IFormsDrawerStyles,
  IHeaderFormsDrawerStyles,
  IInputFormsStyle,
} from '../../interfaces';

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

export const formsDrawerStyles: IFormsDrawerStyles = {
  background: 'var(--gray)',
};

export const headerFormsDrawerStyles: IHeaderFormsDrawerStyles = {
  border: 'none',
};

export const inputFormsStyle: IInputFormsStyle = {
  boxShadow: 'none',
  borderColor: 'var(--primary)',
  width: '100%',
};

export const formsButtonsStyles: IFormsButtonsStyles = {
  color: 'var(--gray)',
};

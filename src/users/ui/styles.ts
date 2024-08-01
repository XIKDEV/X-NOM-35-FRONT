import { IInfoUserListItemStyle, IUsersCardBodyStyle } from '../../interfaces';

export const usersCardBodyStyle: IUsersCardBodyStyle = {
  padding: 0,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
};

export const infoUserListItemStyle: IInfoUserListItemStyle = {
  color: 'var(--primary)',
  textAlign: 'center',
  paddingBottom: '24px',
  fontSize: 'var(--text)',
};

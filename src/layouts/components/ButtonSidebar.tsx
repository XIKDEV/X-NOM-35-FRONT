import { FC } from 'react';
import { IButtonSidebar } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ButtonSidebar: FC<IButtonSidebar> = ({ icon, textBttn }) => {
  return (
    <button className="button-sidebar">
      <FontAwesomeIcon icon={icon} style={{ marginRight: '10px' }} />
      {textBttn}
    </button>
  );
};

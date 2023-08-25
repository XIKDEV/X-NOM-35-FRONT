import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IButtonSidebar } from '../../interfaces';

export const ButtonSidebar: FC<IButtonSidebar> = ({
  icon,
  textBttn,
  isCollapse,
}) => {
  return (
    <button
      className="button-sidebar flex-row-center"
      data-testid="button-sidebar"
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ marginRight: isCollapse ? '0px' : '10px' }}
        data-testid="fa-icon"
      />
      {isCollapse ? '' : `${textBttn}`}
    </button>
  );
};

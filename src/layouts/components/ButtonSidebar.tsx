import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IButtonSidebar } from '../../interfaces';

export const ButtonSidebar: FC<IButtonSidebar> = ({
  navigationTo,
  onClick,
  icon,
  textBttn,
  isCollapse,
}) => {
  return (
    <NavLink
      to={navigationTo}
      onClick={onClick}
      className="button-sidebar flex-row-center"
      data-testid="button-sidebar"
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ marginRight: isCollapse ? '0px' : '10px' }}
        data-testid="fa-icon"
      />
      {isCollapse ? '' : `${textBttn}`}
    </NavLink>
  );
};

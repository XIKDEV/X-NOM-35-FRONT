import { useState } from 'react';
import { useScreenSize } from '../../hooks';

export const useLayoutMainPage = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);
  const { isMobile } = useScreenSize();

  const handleSidebar = (): void => {
    setIsCollapse(!isCollapse);
  };

  const sideBarProps = {
    isMobile,
    isCollapse,
    handleSidebar,
  };

  return {
    isCollapse,
    isMobile,
    handleSidebar,
    sideBarProps,
  };
};

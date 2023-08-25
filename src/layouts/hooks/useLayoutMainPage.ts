import { useState } from 'react';

export const useLayoutMainPage = () => {
  const [isCollapse, setIsCollapse] = useState<boolean>(true);
  const handleSidebar = (): void => {
    setIsCollapse(!isCollapse);
  };

  return {
    isCollapse,
    handleSidebar,
  };
};

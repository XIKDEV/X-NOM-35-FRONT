import { useEffect, useState } from 'react';

export const useScreenSize = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setwidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  const isMobile = width < 769;

  return { width, height, isMobile };
};

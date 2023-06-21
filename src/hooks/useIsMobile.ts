import { useEffect, useState } from 'react';

const MOBILE_VIEWPORT = 480;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_VIEWPORT);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < MOBILE_VIEWPORT) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return { isMobile };
};

export default useIsMobile;

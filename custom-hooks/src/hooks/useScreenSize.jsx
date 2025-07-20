import React, { useEffect, useState } from 'react'

export default function useScreenSize(screenSizeThresshold) {
  const [onSmallDevice, setOnSmallDevice] = useState(false);


  useEffect(() => {
    const checkScreenSize = () => {
      const screenSize = window.innerWidth;
      screenSize <= screenSizeThresshold
        ? setOnSmallDevice(true)
        : setOnSmallDevice(false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // cleanup
    return () => {
      // clean up task
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [screenSizeThresshold]);

  return onSmallDevice
}

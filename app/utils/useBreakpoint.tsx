import { useState, useEffect } from "react";

// const getDeviceConfig = (width: number) => {
//   if (width < 640) {
//     return "xs";
//   } else if (width >= 640 && width < 768) {
//     return "sm";
//   } else if (width >= 768 && width < 1024) {
//     return "md";
//   } else if (width >= 1024 && width < 1280) {
//     return "lg";
//   } else if (width >= 1280 && width < 1536) {
//     return "xl";
//   } else if (width >= 1536) {
//     return "2xl";
//   }
// };

const useBreakpoint = (): number => {
  const getCurrentWidth = (): number => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    } else {
      return 0;
    }
  };

  const [breakpoint, setBreakpoint] = useState(getCurrentWidth());

  useEffect(() => {
    const calculateInnerWidth = () => {
      setTimeout(() => {
        setBreakpoint(window.innerWidth);
      }, 1000);
    };
    window.addEventListener("resize", calculateInnerWidth);
    return () => window.removeEventListener("resize", calculateInnerWidth);
  }, []);

  return breakpoint;
};

export default useBreakpoint;

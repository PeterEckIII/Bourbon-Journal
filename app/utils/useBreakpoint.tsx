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

const useBreakpoint = () => {
  const getCurrentWidth = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    }
  };
  const [breakpoint, setBreakpoint] = useState(getCurrentWidth());

  useEffect(() => {
    const calculateInnerWidth = () => {
      setTimeout(() => {
        setBreakpoint(window.innerWidth);
      }, 200);
    };
    window.addEventListener("resize", calculateInnerWidth);

    return () => window.removeEventListener("resize", calculateInnerWidth);
  }, []);

  return breakpoint;
};

export default useBreakpoint;

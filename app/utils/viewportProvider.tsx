import React, { useState, useEffect } from "react";

interface IViewportProviderProps {
  children: React.ReactNode;
}

export const ViewportContext = React.createContext({
  width: 0,
  height: 0,
});

const ViewportProvider = ({ children }: IViewportProviderProps) => {
  const getDimensions = () => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
  };
  const [width, setWidth] = useState(getDimensions()?.width ?? 0);
  const [height, setHeight] = useState(getDimensions()?.height ?? 0);

  const handleWindowResize = () => {
    return setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportProvider;

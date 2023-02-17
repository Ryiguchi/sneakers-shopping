import { createContext, useState } from "react";

export const ScreenSizeContext = createContext({
  screenSize: 0,
});

export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(0);

  const value = {
    screenSize,
    setScreenSize,
  };

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

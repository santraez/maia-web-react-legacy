import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [appContext, setAppContext] = useState({
    isMenuOpen: false,
    formType: 'empresa',
    planType: 'anual',
    isFilterOpen: false,
  });
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
};
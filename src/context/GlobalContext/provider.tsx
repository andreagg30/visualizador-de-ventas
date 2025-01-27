import React, { createContext, useState, ReactNode } from "react";

export interface GlobalContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleOpen: () => void;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <GlobalContext.Provider value={{ open, setOpen, toggleOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};
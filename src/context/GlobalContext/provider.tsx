import { SECTIONS } from '@/constants';
import React, { createContext, useState, ReactNode } from 'react';

export const GlobalContext = createContext<GlobalContextProps | undefined>(
  undefined
);

interface Section {
  title: string;
  path: string;
}
interface GlobalProviderProps {
  children: ReactNode;
}

export interface GlobalContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleOpen: () => void;
  sideBarItem: Section;
  handleSideBarItem: (item: Section) => void;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [sideBarItem, setSideBarItem] = useState<Section>(SECTIONS[0]);

  function handleSideBarItem(item: Section) {
    setSideBarItem(item);
  }
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <GlobalContext.Provider
      value={{ open, setOpen, toggleOpen, sideBarItem, handleSideBarItem }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

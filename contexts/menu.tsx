"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextProps {
  open: boolean;
  toggle: () => void;
}

const MenuContext = createContext<MenuContextProps | null>(null);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

import React, { ReactNode } from "react";
import { ProductProvider } from "../context/productContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  );
};
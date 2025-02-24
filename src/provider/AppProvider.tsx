import React, { ReactNode } from "react";
import { ProductProvider } from "../context/productContext";
import { CategoryProvider } from "../context/categoryContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ProductProvider>
        <CategoryProvider>
         {children}  
        </CategoryProvider>
    </ProductProvider>
  );
};
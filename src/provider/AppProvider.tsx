import React, { ReactNode, FC } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import { ProductProvider } from "../context/productContext";
import { SellerProvider } from "../context/sellerContext";
import { CategoryProvider } from "../context/categoryContext";

interface AppProviderProps {
  children: ReactNode;
}

interface ErrorFallbackProps {
  error: { message: string };
}

const ErrorFallback: FC<ErrorFallbackProps> = ({ error }) => (
  <div className="p-4 bg-red-100 text-red-700">
      <h2>Terjadi Kesalahan:</h2>
      <pre>{error.message}</pre>
  </div>
);

export const AppProvider = ({ children }: AppProviderProps) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ProductProvider>
          <SellerProvider>
              <CategoryProvider>
                  {children}
              </CategoryProvider>
          </SellerProvider>
      </ProductProvider>
  </ErrorBoundary>
);
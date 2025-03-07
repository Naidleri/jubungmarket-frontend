import { ReactNode, FC } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import { AuthProvider } from "../context/authProvider";
import { ProductProvider } from "../context/productProvider";
import { SellerProvider } from "../context/sellerProvider";
import { CategoryProvider } from "../context/categoryProvider";

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
    <AuthProvider>
      <ProductProvider>
          <SellerProvider>
              <CategoryProvider>
                  {children}
              </CategoryProvider>
          </SellerProvider>
      </ProductProvider>
    </AuthProvider>
  </ErrorBoundary>
);
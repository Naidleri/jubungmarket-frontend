import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/authProvider";
import Homepage from './pages/Homepage';
import ResultPage from './pages/ResultPage';
import DetailPage from "./pages/DetailPage";
import PenjualPage from "./pages/PenjualPage";
import AuthPage from "./pages/AuthPage";
import AdminAkunPage from "./pages/AdminAkunPage";
import AdminProdukPage from "./pages/AdminProdukPage"; 
import AddProductPage from "./pages/AddProductPage";
import { ReactElement, useContext } from 'react';
import { AuthContext } from "./context/authContext";

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/result/:categoryName" element={<ResultPage />} />
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/penjual" element={<PenjualPage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route 
          path="/admin/akun" 
          element={
            <ProtectedRoute>
              <AdminAkunPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/produk" 
          element={
            <ProtectedRoute>
              <AdminProdukPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/produk/tambah-produk" 
          element={
            <ProtectedRoute>
              <AddProductPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
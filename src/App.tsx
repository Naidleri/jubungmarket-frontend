import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import ResultPage from './pages/ResultPage';
import DetailPage from "./pages/DetailPage";
import PenjualPage from "./pages/PenjualPage";
import AuthPage from "./pages/AuthPage";
import AdminAkunPage from "./pages/AdminAkunPage";
import AdminProdukPage from "./pages/AdminProdukPage"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/penjual" element={<PenjualPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin/akun" element={<AdminAkunPage />} />
      <Route path="/admin/produk" element={<AdminProdukPage />} />
    </Routes>
  );
}

export default App;

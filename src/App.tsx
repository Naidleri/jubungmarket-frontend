import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import ResultPage from './pages/ResultPage'
import DetailPage from "./pages/DetailPage";
import PenjualPage from "./pages/PenjualPage";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/penjual" element={<PenjualPage />} />
      </Routes>
    </Router>
  );
}

export default App

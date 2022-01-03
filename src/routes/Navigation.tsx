import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from '../pages/Inicio';

const DashboardRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/about" element={<h1>Desde about</h1>} />
      </Routes>
    </Router>
  )
}

export default DashboardRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio, SocialesApp } from '../pages';

const DashboardRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/dashboard" element={<SocialesApp />} />
      </Routes>
    </Router>
  )
}

export default DashboardRoutes;

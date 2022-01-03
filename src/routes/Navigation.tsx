import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Bienvenida, SocialesApp } from '../pages';

const DashboardRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/dashboard/*" element={<SocialesApp />} />
        <Route path="/*" element={<Navigate to="/" replace/>} />
      </Routes>
    </Router>
  )
}

export default DashboardRoutes;

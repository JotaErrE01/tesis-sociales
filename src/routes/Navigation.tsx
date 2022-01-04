import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bienvenida, SocialesApp } from '../pages';

const DashboardRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Bienvenida />} />
        <Route path="/*" element={<SocialesApp />} />
      </Routes>
    </Router>
  )
}

export default DashboardRoutes;

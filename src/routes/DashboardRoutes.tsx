import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Bienvenida, SocialesApp } from '../pages';
import { Inicio, Videos, Juegos, Preguntas } from '../pages/index';

const DashboardRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="welcome" element={<Bienvenida />} />
        <Route path="/*" element={<SocialesApp />} >
          <Route path="inicio/:id" element={<Inicio />} />
          <Route path="videos/:id" element={<Videos />} />
          <Route path="juegos/:id" element={<Juegos />} />
          <Route path="preguntas" element={<Preguntas />} />
          <Route path="*" element={<Navigate to="welcome" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default DashboardRoutes;

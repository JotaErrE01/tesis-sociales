import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../components/';
import { Inicio, Videos, Juegos, Preguntas } from './index';

export const SocialesApp = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="inicio" element={<Inicio />} />
        <Route path="videos" element={<Videos />} />
        <Route path="juegos" element={<Juegos />} />
        <Route path="preguntas" element={<Preguntas />} />
        <Route path="*" element={<Navigate to="inicio" replace/>} />
      </Routes>
    </>
  )
}

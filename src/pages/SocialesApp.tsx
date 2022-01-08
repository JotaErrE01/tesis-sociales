import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Navbar } from '../components/';
import { Inicio, Videos, Juegos, Preguntas } from './index';
import { AsideBar } from '../components/AsideBar';

export const SocialesApp = () => {

  return (
    <>
      <Navbar />
      <div className="flex container mx-auto h-screen justify-between gap-3 mt-5">
        <div className="bg-green-600 w-3/4 rounded-xl">
          <Routes>
            <Route path="inicio/:id" element={<Inicio />} />
            <Route path="videos/:id" element={<Videos />} />
            <Route path="juegos" element={<Juegos />} />
            <Route path="preguntas" element={<Preguntas />} />
            <Route path="*" element={<Navigate to="inicio/1" replace />} />
          </Routes>
        </div>

        <AsideBar />
      </div>
    </>
  )
}

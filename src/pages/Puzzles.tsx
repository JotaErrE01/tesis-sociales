import { Routes, Route, useParams, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { PuzzleCard } from './PuzzleCard';
import { useEffect } from 'react';


export const Puzzles = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('/puzzles/1');
    }
  }, []);
  

  return (
    <Routes>
      <Route path=":id" element={<PuzzleCard />} />
    </Routes>
  )
}

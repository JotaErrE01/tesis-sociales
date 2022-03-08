import { useParams, Navigate } from 'react-router-dom';

const rutasIDS = [1, 2, 3, 4]

export const PuzzleCard = () => {
  const { id } = useParams();

  if(!rutasIDS.includes(parseInt(id || '0'))){
    return <Navigate to='/puzzles/1' replace />
  }

  return (
    <div>
      <h1>PuzzleCard {id}</h1>
    </div>
  )
};

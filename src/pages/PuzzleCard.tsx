import { useParams, Navigate } from 'react-router-dom';
import { optionsList } from '../data/optionList';

const rutasIDS = [1, 2, 3, 4]

export const PuzzleCard = () => {
  const { id } = useParams();
  const paramID = parseInt(id || '0')

  if (!rutasIDS.includes(paramID)) {
    return <Navigate to='/puzzles/1' replace />
  }

  return (
    <>
      {/* <h1 className="text-white text-3xl font-bold my-5 text-center">Puzzle {paramId}</h1> */}
      {
        optionsList['puzzles'].map(({ id, title, url }) => {
          console.log(id, paramID);

          return paramID == id ?
            <div
              key={id}
              className="flex flex-col items-center "
            >
              <h1
                className="text-white text-3xl font-bold my-5 text-center"
              >{title}</h1>

              {/* <iframe className='rounded-lg' src={url} style={{ width: '100%', height: 600 }} frameBorder={0} allowFullScreen /> */}

              <iframe className='rounded-lg shadow shadow-gray-800' src={url} style={{width: '100%', height: 600}} frameBorder={0} allowFullScreen />
            </div>
            : null
        }
        )
      }
    </>
  )
};

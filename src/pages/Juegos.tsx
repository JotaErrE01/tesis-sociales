import { optionsList } from '../data/optionList';
import { useParamState } from '../hooks/useParamState';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const Juegos = () => {

  const { paramState } = useParamState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      navigate(`/juegos/${params.id}`);
    }else{
      navigate('/juegos/1');
    }
  }, [params.id]);

  return (
    <>
      {
        optionsList['juegos'].map(({ id, title, url }) => (
          paramState === id &&
          <div
            key={id}
            className="flex flex-col items-center justify-center h-screen"
          >
            <h1
              className="text-white text-3xl font-bold my-5 text-center"
            >{title}</h1>

            <iframe
              className="w-full h-full rounded border-none"
              src={url}
            ></iframe>
          </div>
        ))
      }
    </>
  )
}

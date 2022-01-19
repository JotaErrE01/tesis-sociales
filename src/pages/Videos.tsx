import { optionsList } from '../data/optionList';
import { useParamState } from '../hooks/useParamState';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Videos = () => {

  const { paramState } = useParamState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id) {
      navigate(`/videos/${params.id}`);
    }else{
      navigate('/videos/1');
    }
  }, [params.id]);

  return (
    <>
      {
        optionsList['videos'].map(({ id, title, url }) => (
          paramState === id &&
          <div
            key={id}
            className="h-full flex flex-col items-center"
          >
            <h1
              className="text-white text-3xl font-bold my-5"
            >{title}</h1>

            <iframe src={url} className="w-11/12 aspect-video rounded shadow  bg-gray-700" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        ))
      }
    </>
  )
}

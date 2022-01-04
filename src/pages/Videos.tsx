import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { optionsList } from '../data/optionList';

export const Videos = () => {

  const params = useParams();
  const [videoState, setVideoState] = useState(1);

  useEffect(() => {
    if (params.id) {
      setVideoState(parseInt(params.id));
    }

  }, [params]);

  return (
    <>
      {
        optionsList['videos'].map(({ id, title, url }) => (
          videoState === id &&
          <div
            key={id}
            className="h-full flex flex-col items-center"
          >
            <h1
              className="text-white text-3xl font-bold mt-5"
            >{title}</h1>

            <ReactPlayer
              url={url}
              className="m-auto"
              width="80%"
              height="75%"
              controls={true}
            />
          </div>
        ))
      }
    </>
  )
}

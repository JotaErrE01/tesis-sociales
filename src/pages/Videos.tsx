import ReactPlayer from 'react-player';
import { optionsList } from '../data/optionList';
import { useParamState } from '../hooks/useParamState';

export const Videos = () => {

  const { paramState } = useParamState();

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

            <ReactPlayer
              url={url}
              width="80%"
              height="500px"
              controls={true}
            />
          </div>
        ))
      }
    </>
  )
}

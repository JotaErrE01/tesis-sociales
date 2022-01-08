import { optionsList } from '../data/optionList';
import { useParamState } from '../hooks/useParamState';


export const Juegos = () => {

  const { paramState } = useParamState();

  return (
    <>
      {
        optionsList['juegos'].map(({ id, title, url }) => (
          paramState === id &&
          <div
            key={id}
            className="flex flex-col items-center justify-center h-full"
          >
            <h1
              className="text-white text-3xl font-bold my-5"
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

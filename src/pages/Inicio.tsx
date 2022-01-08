import { optionsList } from '../data/optionList';
import { useParamState } from '../hooks/useParamState';


export const Inicio = () => {

  const { paramState } = useParamState();

  return (
    <>
      {
        optionsList['inicio'].map(option => (
          paramState === option.id &&
          <div
            key={option.id}
            className="h-full flex flex-col items-center"
          >
            <h1
              className="text-white text-3xl font-bold mt-5"
            >{option.title}</h1>
          </div>
        ))
      }
    </>
  )
}

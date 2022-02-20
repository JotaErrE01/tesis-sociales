import { optionsList } from '../data/optionList';
import { useParamState } from '../hooks/useParamState';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { TopicAbout } from './TopicAbout';


export const InicioContent = () => {

  const { paramState } = useParamState();
  
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();


  const handleClick = (optionId: number, id: string) => {
    setVisible(false);
    navigate(`/inicio/${optionId}/${id}`);
  }

  return (
    <>
      {
        optionsList['inicio'].map((option) => (
          paramState === option.id &&
          <div
            key={option.id}
            className="h-full flex flex-col items-center text-center"
          >
            {
              visible &&
              <h1
                className="text-white text-3xl font-bold mt-5 mb-14"
              >{option.title}</h1>
            }

            {
              option.childrenRoutes?.map(({ id, title }) => (
                <Fragment
                  key={id}
                >
                  {
                    visible &&
                    <button
                      className="bg-orange-500 mb-10 rounded text-white p-5 w-full md:w-6/12 hover:bg-orange-600 transition-all duration-300 ease-in-out shadow shadow-orange-600 animate__animated animate__fadeIn"
                      onClick={() => handleClick(option.id, id)}
                    >{title}</button>
                  }
                </Fragment>
              ))
            }

            <Routes>
              {
                option.childrenRoutes?.map(({ id, ...rest }) => (
                  <Route key={id} path={id} element={
                    <TopicAbout
                      {...rest}
                      visible={visible}
                      setVisible={setVisible}                      
                    />
                  } />
                ))
              }
            </Routes>

          </div>
        ))
      }
    </>
  )
}

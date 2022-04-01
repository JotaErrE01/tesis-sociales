import { Navbar } from "../components";
import { optionsList } from "../data/optionList";
import { Player } from '@lottiefiles/react-lottie-player';


export const Creditos = () => {
  return (
    <>
      <Navbar />
      <div className="flex container mx-auto h-auto justify-between gap-5 my-5 lg:flex-row w-[95%] min-h-screen">
        <div className="bg-green-600 w-full rounded-xl p-5">
          <h1
            className="text-center text-indigo-700 text-3xl font-bold mt-2"
          >Fuentes Uilizadas</h1>

          <div className="ml-10 flex gap-[5rem] lg:gap-[10rem] mt-10 items-center">
            <div>
              <h2
                className="text-lg md:text-2xl md:leading-[2.5rem] font-bold mt-2 md:mt-10 mb-5 text-indigo-700 flex gap-2 items-center"
              >Fuentes de Videos <i className="fas fa-video"></i>
              </h2>
              <ul
                className="text-white list-disc lg:list-inside text-xs md:text-sm lg:text-lg"
              >
                {
                  optionsList['videos'].map(({ url }, index) => (
                    <li
                      key={index}
                      className='my-2 lg:ml-5'
                    >{url}</li>
                  ))
                }
              </ul>
            </div>
            <img className="hidden md:block md:h-[12rem] lg:h-[22rem]" src="/lupagirl.png" alt="Aprender Observando" />
          </div>

          <div className="flex justify-evenly items-center">
            <Player
              autoplay
              loop
              src={'https://assets1.lottiefiles.com/packages/lf20_ugcwsrgz.json'}
              className="hidden md:block md:h-[180px] md:w-[180px] lg:h-[250px] lg:w-[250px]"
            >
            </Player>

            <div className="max-w-full">
              <h2
                className="text-lg md:text-2xl leading-[2.5rem] font-bold mt-10 mb-5 text-indigo-700 flex gap-2 items-center"
              >Fuentes de Juegos <i className="fas fa-dice"></i>
              </h2>
              <ul
                className="text-white list-disc list-inside text-xs lg:text-lg"
              >
                {
                  optionsList['juegos'].map(({ url }, index) => (
                    <li
                      key={index}
                      className='my-2 lg:ml-5'
                    >{url}</li>
                  ))
                }
              </ul>
            </div>
          </div>

          <Player
            autoplay
            loop
            src={'https://assets10.lottiefiles.com/packages/lf20_1a8dx7zj.json'}
            className="absolute hidden md:block top-20 right-8 lg:top-16 lg:right-5 h-[150px] w-[150px] lg:h-[250px] lg:w-[250px]"
          >
          </Player>
        </div>
      </div>
    </>
  )
};

import { Navbar } from "../components";
import { optionsList } from "../data/optionList";
import { Player } from '@lottiefiles/react-lottie-player';


export const Creditos = () => {
  return (
    <>
      <Navbar />
      <div className="flex container mx-auto h-auto justify-between gap-5 my-5 flex-col-reverse lg:flex-row w-[95%] min-h-screen">
        <div className="bg-green-600 w-full rounded-xl p-5">
          <h1
            className="text-center text-indigo-700 text-3xl font-bold mt-2"
          >Fuentes Uilizadas</h1>

          <div className="ml-10 flex gap-[10rem] mt-10">
            <div>
              <h2
                className="text-2xl leading-[2.5rem] font-bold mt-10 mb-5 text-indigo-700 flex gap-2 items-center"
              >Fuentes de Videos <i className="fas fa-video"></i>
              </h2>
              <ul
                className="text-white list-disc list-inside text-lg"
              >
                {
                  optionsList['videos'].map(({ url }, index) => (
                    <li
                      key={index}
                      className='my-2 ml-5'
                    >{url}</li>
                  ))
                }
              </ul>
            </div>
            <img className="w-[20rem]" src="/lupagirl.png" alt="Aprender Observando" />
          </div>

          <div className="flex justify-evenly">
            <Player
              autoplay
              loop
              src={'https://assets1.lottiefiles.com/packages/lf20_ugcwsrgz.json'}
              // style={{ height: '250px', width: '250px' }}
              className="h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
            >
            </Player>

            <div>
              <h2
                className="text-2xl leading-[2.5rem] font-bold mt-10 mb-5 text-indigo-700 flex gap-2 items-center"
              >Fuentes de Juegos <i className="fas fa-dice"></i>
              </h2>
              <ul
                className="text-white list-disc list-inside text-lg"
              >
                {
                  optionsList['juegos'].map(({ url }, index) => (
                    <li
                      key={index}
                      className='my-2 ml-5'
                    >{url}</li>
                  ))
                }
              </ul>
            </div>
          </div>

          <Player
            autoplay
            loop
            src={'https://assets4.lottiefiles.com/packages/lf20_vzy3decs.json'}
            // style={{ height: '250px', width: '250px' }}
            className="absolute top-5 right-5 h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
          >
          </Player>
        </div>
      </div>
    </>
  )
};

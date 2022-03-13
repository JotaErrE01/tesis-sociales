import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/PrimaryButton';
import { useEffect, useState } from 'react';

export const Bienvenida = () => {
  const navigate = useNavigate();
  const [lottieStudent, setLottieStudent] = useState();
  const [lottieStudents, setLottieStudents] = useState();

  const handleClick = () => {
    navigate("/inicio/1", { replace: true });
  }

  useEffect(() => {
    import('../../public/lotties/student.json').then((e: any) => setLottieStudent(e)).catch(console.log);
    import('../../public/lotties/students.json').then((e: any) => setLottieStudents(e)).catch(console.log);
  }, []);


  return (
    <div
      className="bg-orange-500 h-screen flex justify-center items-center flex-col"
    >
      <div
        className="container mx-auto bg-image h-full flex justify-center items-center flex-col md:w-4/5 px-2"
      >
        <h1
          className="text-cyan-400 text-2xl relative z-10 font-bold mb-14 md:text-4xl text-center border-solid border-cyan-500 border-4 rounded-lg px-4 py-3"
        >Bienvenido a tu Plataforma para Aprender</h1>

        <PrimaryButton
          handleClick={handleClick}
        />
      </div>
      <Player
        autoplay
        loop
        src={lottieStudent || ''}
        // style={{ height: '250px', width: '250px' }}
        className="absolute top-5 md:top-0 left-5 h-[180px] w-[180px] md:h-[250px] md:w-[250px]"
      >
      </Player>

      <Player
        autoplay
        loop
        src={lottieStudents || ''}
        style={{ height: '250px', width: '250px' }}
        className="absolute top-5 right-10 hidden md:block"
      >
      </Player>

      <img 
        className="fixed m-auto bottom-20 md:bottom-10 left-0 right-0 w-3/5"
        src="/gifs/evolution.gif" alt="Evolucion" 
      />
    </div>
  )
}

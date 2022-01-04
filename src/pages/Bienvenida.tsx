import { useNavigate } from 'react-router-dom';
import {PrimaryButton} from '../components/PrimaryButton';

export const Bienvenida = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/inicio", { replace: true });
  }

  return (
    <div 
      className="bg-orange-500 h-screen flex justify-center items-center flex-col"
    >
      <div
        className="container mx-auto bg-image h-full flex justify-center items-center flex-col md:w-4/5"
      >
        <h1
          className="text-white text-3xl font-bold mb-14 md:text-5xl text-center"
        >Bienvenido a tu Plataforma para Aprender</h1>
        
        <PrimaryButton 
          handleClick={handleClick} 
        />
      </div>

    </div>
  )
}

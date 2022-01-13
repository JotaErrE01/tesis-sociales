import { useNavigate, useOutlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const Inicio = () => {

  const outlet = useOutlet();
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (params.id) {
      navigate(`/inicio/${params.id}`);
    }else{
      navigate('/inicio/1');
    }
  }, [params.id]);

  return (
    <>
      {outlet}
    </>
  )
}

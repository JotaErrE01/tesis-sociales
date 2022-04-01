import Navbar from '../components/Navbar';
import { Player } from '@lottiefiles/react-lottie-player';

export const Agradecimiento = () => {
  return (
    <>
      <Navbar />
      <div className="flex container mx-auto h-auto justify-between gap-5 my-5 lg:flex-row w-[95%] min-h-screen">
        <div className="bg-green-600 w-full rounded-xl p-5">
          <h1
            className="text-center text-indigo-700 text-3xl font-bold mt-2"
          >Agradecimientos</h1>

          <div className='text-white' >
            <h2 className='text-indigo-700 font-bold text-2xl mt-10 mb-5'>Agradecimiento de Jordy Erwin Orrala Pesantes</h2>
            <p className='text-lg'>A lo largo de nuestra carrera, nos ha tocado vencer muchos obstáculos, en los cuales hemos necesitado el apoyo de muchas personas, y en esta oportunidad queremos agradecer a:

              Quiero dedicar este proyecto especialmente a Dios todopoderoso el creador de todas las cosas, que me ha dado la vida y la fortaleza para continuar, porque estando en mi limite y sentí desfallecer me dio las fuerzas para seguir adelante y así terminar este proyecto de investigación.

              De igual forma a mis padres, quienes le debo la vida, les agradezco de todo corazón, su cariño y su comprensión, a quienes me han formado con buenos sentimientos, hábitos y valores, cuales me ha ayudado a salir adelanté buscando siempre el mejor camino.

              A mis maestros, gracias por su tiempo, por su apoyo, así como su por la sabiduría que nos han trasmitido en el desarrollo de mi formación académica, especial al MSc. Héctor Álvarez por haberme guiado con el desarrollo de este trabajo y llegar a la culminación del mismo.
            </p>
          </div>

          <div className='text-white' >
            <h2 className='text-indigo-700 font-bold text-2xl mt-10 mb-5'>Agradecimiento de Javier Jaffet Sánchez Alay</h2>
            <p className='text-lg'>Agradecer primero a Dios ya que él me ha dado inteligencia y sabiduría para poder culminar esta nueva etapa y avanzar un peldaño más en esta vida.

              Agradezco a mis padres por el apoyo desde que empecé la vida estudiantil hasta que llego a culminar esta etapa y seguir con más.

              Agradezco a mis hermanos por el apoyo incondicional, el cariño y la ternura para que todo se pueda realizar de la mejor manera.

              Agradezco a mis compañeros de universidad que siempre estuvieron conmigo y en la cual hubo un apoyo mutuo, generosidad y muchos recuerdos hermosos.

              A mi tutor académico Msc. Héctor Omar Álvarez por sus conocimientos, su paciencia, su entrega y su ayuda en el desarrollo de este trabajo.

              A la Universidad de Guayaquil por permitirme formar parte de esta prestigiosa institución que ha formado a muchas personas importantes y entre una de esas personas soy yo.
            </p>
          </div>

          <Player
            autoplay
            loop
            src={'https://assets4.lottiefiles.com/packages/lf20_vzy3decs.json'}
            className="absolute top-5 right-5 hidden md:block md:h-[250px] md:w-[250px]"
          >
          </Player>
        </div>
      </div>
    </>
  )
};

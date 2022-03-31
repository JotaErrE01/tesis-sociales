import Navbar from '../components/Navbar';

export const Agradecimiento = () => {
  return (
    <>
      <Navbar />
      <div className="flex container mx-auto h-auto justify-between gap-5 my-5 flex-col-reverse lg:flex-row w-[95%] min-h-screen">
        <div className="bg-green-600 w-full rounded-xl p-5">
          <h1
            className="text-center text-indigo-700 text-3xl font-bold mt-2"
          >Agradecimientos</h1>

        </div>
      </div>
    </>
  )
};

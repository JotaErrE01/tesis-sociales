import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/';
import { AsideBar } from '../components/AsideBar';

export const SocialesApp = () => {

  return (
    <>
      <Navbar />
      <div className="flex container mx-auto h-auto justify-between gap-5 my-5 flex-col-reverse lg:flex-row w-[95%] lg:w-full">
        <div className="bg-green-600 w-full lg:w-3/4 rounded-xl h-auto lg:h-full p-5">
          <Outlet />
        </div>

        <AsideBar />
      </div>
    </>
  )
}

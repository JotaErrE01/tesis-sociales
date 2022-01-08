import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/';
import { AsideBar } from '../components/AsideBar';

export const SocialesApp = () => {

  return (
    <>
      <Navbar />
      <div className="flex container mx-auto h-[40rem] justify-between gap-3 my-5">
        <div className="bg-green-600 w-3/4 rounded-xl h-full p-5">
          <Outlet />
        </div>

        <AsideBar />
      </div>
    </>
  )
}

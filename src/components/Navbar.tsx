import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/navLinks';
import ico from '../svgs/ico.svg';
import { useState } from 'react';


export const Navbar = () => {

  const [ visible, setVisible ] = useState(false);

  return (
    <div>
      <img 
        className="md:hidden fixed w-20 z-20 right-5 bottom-5" 
        src={ico} 
        alt="ICO" 
        onClick={() => setVisible(!visible)}
      />

      <header className={`bg-orange-500 shadow-sm shadow-orange-900 md:block fixed md:static h-screen md:h-auto w-full z-10 top-0 ${ !visible && 'hidden' }`}>
        <nav
          className="flex md:flex-row flex-col justify-evenly md:text-2xl text-4xl text-white mx-auto container md:h-auto h-4/5 mt-5 md:mt-0"
        >
          {
            navLinks.map(({ text, to, svg }) => (
              <NavLink
                  key={to}
                  to={to}
                  className="font-bold p-3 flex gap-2 items-center hover:bg-blue-500 transition:bg-blue-500 duration-200 hover:cursor-pointer justify-center"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'rgb(59 130 246 / 1)' : '',
                  })}
                  onClick={() => setVisible(false)}
                >
                  <i className={`${svg} w-fit h-fit`}></i>
                  <p>{text}</p>
                </NavLink>
            ))
          }
        </nav>
      </header>
    </div>
  )
}

export default Navbar;

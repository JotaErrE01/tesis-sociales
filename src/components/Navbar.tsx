import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/navLinks';
import ico from '../svgs/ico.svg';
import { useState } from 'react';


export const Navbar = () => {

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <img
        className="md:hidden fixed w-20 z-20 right-5 bottom-5"
        src={ico}
        alt="ICO"
        onClick={() => setVisible(!visible)}
      />

      <header className={`bg-orange-500 shadow-sm shadow-orange-900 md:block fixed md:static h-screen md:h-auto w-full z-10 top-0 ${!visible && 'hidden'}`}>
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
                {
                  svg ?
                    <i className={`${svg} w-fit h-fit`}></i>
                    :
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM14 17H11V13H10V11H13V15H14V17ZM13 9H11V7H13V9Z" fill="#ffffff"></path>
                    </svg>

                }
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

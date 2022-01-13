import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/navLinks';


export const Navbar = () => {
  return (
    <div>
      <header className="bg-orange-500 shadow-sm shadow-orange-900">
        <nav
          className="navbar navbar-expand-lg navbar-dark flex justify-evenly text-2xl text-white mx-auto container"
        >
          {
            navLinks.map(({ text, to, svg }) => (
              <NavLink
                  key={to}
                  to={to}
                  className="font-bold p-3 flex gap-2 items-center hover:bg-blue-500 transition:bg-blue-500 duration-200 hover:cursor-pointer"
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? 'rgb(59 130 246 / 1)' : '',
                  })}
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

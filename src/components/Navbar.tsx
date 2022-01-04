import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/navLinks';


export const Navbar = () => {
  return (
    <div>
      <header className='bg-orange-500'>
        <nav
          className="navbar navbar-expand-lg navbar-dark flex justify-evenly text-2xl text-white mx-auto container"
        >
          {
            navLinks.map(({ text, to }) => (
              <NavLink
                to={to}
                key={to}
                className="font-bold p-3 hover:bg-blue-500 transition:bg-blue-500 duration-200"
                style={({isActive}) => ({
                  backgroundColor: isActive ? 'rgb(59 130 246 / 1)' : '',
                })}
              >{text}</NavLink>
            ))
          }
        </nav>
      </header>
    </div>
  )
}

export default Navbar;

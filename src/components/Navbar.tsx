import { NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-orange-500 flex justify-evenly text-2xl text-white p-3"
        >
          <NavLink to="/dashboard/inicio">Inicio</NavLink>
          <NavLink to="/dashboard/videos">Videos</NavLink>
          <NavLink to="/dashboard/juegos">Juegos</NavLink>
          <NavLink to="/dashboard/preguntas">Preguntas</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;

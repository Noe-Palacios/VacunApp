import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <aside className="navbar">
      <div className="navbar_logo">
        <img src="" alt="Logo Hospital" />
      </div>

      <nav className="navbar_nav">
        <ul>
          <li>
            <NavLink
              to={"/Registro"}
              className={({ isActive }) =>
                "navbar_link" + (isActive ? " navbar_link--active" : "")
              }
            >
              Registrar
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Buscar"}
              className={({ isActive }) =>
                "navbar_link" + (isActive ? " navbar_link--active" : "")
              }
            >
              Buscar
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

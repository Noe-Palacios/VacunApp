import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  return (
    <aside className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo Hospital" />
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
          <li>
            <NavLink
              to={"/Configurar"}
              className={({ isActive }) =>
                "navbar_link" + (isActive ? " navbar_link--active" : "")
              }
            >
              Configurar
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Proximos"}
              className={({ isActive }) =>
                "navbar_link" + (isActive ? " navbar_link--active" : "")
              }
            >
              Próximos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/Reportes"}
              className={({ isActive }) =>
                "navbar_link" + (isActive ? " navbar_link--active" : "")
              }
            >
              Reportes
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  return (
    <aside className="navbar">
      <div>
        <div className="navbar_logo">
          <img src={logo} alt="Logo Hospital" width="150" />
        </div>
        {/* <span className="ms-2 fw-bold">Sidebar</span> */}
        <nav className="navbar_nav mt-4">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                to={"/Registro"}
                className={({ isActive }) =>
                  "navbar_link" + (isActive ? " navbar_link--active" : "")
                }
              >
                <i className="fas fa-home"></i>
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
                <i className="fas fa-search"></i>
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
                <i className="fas fa-cogs"></i>
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
                <i className="fas fa-calendar-alt"></i>
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
                <i className="fas fa-chart-bar"></i>
                Reportes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Login"}
                className={({ isActive }) =>
                  "navbar_link" + (isActive ? " navbar_link--active" : "")
                }
              >
                <i className="fas fa-chart-bar"></i>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Pie de usuario */}
      {/*       <div className="navbar_footer">
        <img src={userAvatar} alt="Usuario" />
        <span className="fw-medium">mdo ▾</span>
      </div> */}
    </aside>
  );
};

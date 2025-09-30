import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { alertaRedireccion } from "../utils/alertas";

const Header = () => {
  let usuarioAuth = JSON.parse(localStorage.getItem("usuario"));
  let navigate = useNavigate();
  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    alertaRedireccion("Sesión finalizada...", "info", navigate, "/");
  }
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">
            <span className="logo-text">📚</span>
          </div>
          <h1 className="platform-name">StudenCare</h1>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/home" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/perfil" className="nav-link">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/notas" className="nav-link">
                Notas
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-user">
          <div className="user-profile">
            <div className="user-avatar">
              <span className="avatar-text">JZ</span>
            </div>
            <div className="user-info">
              <span className="user-name">{usuarioAuth.nombre}</span>
            </div>
          </div>
          <button onClick={cerrarSesion} type="button" className="logout-btn">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

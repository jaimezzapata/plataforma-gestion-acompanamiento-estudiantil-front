import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { alertaRedireccion } from "../utils/alertas";
import { generarToken } from "../utils/funciones";
import { endPoints } from "../api/apiSistemaGestion";
// import { usuarios } from "../utils/dataBase";

function Login() {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  let navigate = useNavigate();

  function getUsuarios() {
    fetch(endPoints.usuarios)
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getUsuarios();
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }, []);

  function buscarUsuario() {
    let auth = usuarios.find(
      (usuario) =>
        getEmail == usuario.correo && getPassword == usuario.contraseña
    );
    return auth;
  }

  function iniciarSesion() {
    if (buscarUsuario()) {
      let tokenAcceso = generarToken();
      localStorage.setItem("token", JSON.stringify(tokenAcceso));
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      alertaRedireccion(
        "Bienvenido " + buscarUsuario().nombre,
        "success",
        navigate,
        "/home"
      );
    } else {
      alert("Error de credenciales");
    }
  }

  return (
    <div className="login-form-container">
      <form className="form">
        <p className="form-title">Login</p>
        <div className="input-container">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            type="email"
          />
          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <div className="input-container">
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
          />

          <span>
            <svg
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
              <path
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <button onClick={iniciarSesion} className="submit" type="button">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;

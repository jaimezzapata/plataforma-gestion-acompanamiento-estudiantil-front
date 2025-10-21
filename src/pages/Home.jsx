import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Estadisticas from "../components/Estadisticas";

const Home = () => {
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  console.log(usuario);
  return (
    <main className="home-container">
      <Header />
      <section className="home-content">
        <div>
          <h1>Bienvenido a StudenCare</h1>
          <p>Tu plataforma de gestión y acompañamiento estudiantil.</p>
        </div>
        {usuario.rol == "profesor" ? (
          <Estadisticas />
        ) : (
          <div className="restricted-access">
            <div className="restricted-icon">🔒</div>
            <h2 className="restricted-title">Acceso Restringido</h2>
            <p className="restricted-message">
              Lo sentimos, las estadísticas solo están disponibles para profesores.
            </p>
            <p className="restricted-contact">
              Si necesitas acceso, por favor contacta al administrador.
            </p>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Home;

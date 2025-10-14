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
        <h1>Bienvenido a StudenCare</h1>
        <p>Tu plataforma de gestión y acompañamiento estudiantil.</p>
        {usuario.rol == "profesor" ? (
          <Estadisticas />
        ) : (
          <h1>No puede ver estadisticas</h1>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Home;

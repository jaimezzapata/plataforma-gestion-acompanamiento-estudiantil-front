import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="home-container">
      <Header />
      <section className="home-content">
        <h1>Bienvenido a StudenCare</h1>
        <p>Tu plataforma de gestión y acompañamiento estudiantil.</p>
      </section>
      <Footer />
    </main>
  );
};

export default Home;

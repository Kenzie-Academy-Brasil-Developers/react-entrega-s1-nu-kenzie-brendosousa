import logo from "./logo.svg";
import Logo from "./img/logo.png";
import Back from "./img/back.svg";
import UserPage from "./components/UserPage";
import React from "react";
import "./reset.css";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [showPage, setShowPage] = useState(false);

  return (
    <div className="App">
      {showPage ? (
        <UserPage showPage={showPage} setShowPage={setShowPage} />
      ) : (
        <div className="Top">
          <figure className="logo">
            <img src={Logo} alt="logo nu kenzie" />
            <figcaption>Logo Nu Kenzie</figcaption>
          </figure>

          <h2>Centralize o controle das suas finanças</h2>

          <p>de forma rápida e segura</p>

          <button
            onClick={() => {
              setShowPage(!showPage);
            }}
          >
            Iniciar
          </button>

          <figure className="back">
            <img src={Back} alt="Imagem de fundo" />
            <figcaption>Imagem de fundo</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
};

export default App;

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
      <div className="Top">
        <figure className="logo">
          <img src={Logo} alt="logo nu kenzie" />
          <figcaption>Logo Nu Kenzie</figcaption>
        </figure>

        <h2>Centralize o controle das suas finanças</h2>

        <p>de forma rápida e segura</p>

        <button
          onClick={() => {
            document.querySelector(".Top").style.display = "none";
            setShowPage(true);
            document.querySelector(".user-page").style.display = "flex";
          }}
        >
          Iniciar
        </button>

        <figure className="back">
          <img src={Back} alt="Imagem de fundo" />
          <figcaption>Imagem de fundo</figcaption>
        </figure>
      </div>
      {showPage ? <UserPage /> : null}
    </div>
  );
};

export default App;

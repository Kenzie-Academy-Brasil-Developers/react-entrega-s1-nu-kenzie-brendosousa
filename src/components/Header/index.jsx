import "./styles.css";
import Logo from "./img/NuKenzie.svg";

const Header = () => {
  return (
    <header className="header">
      <figure>
        <img src={Logo} alt="logo" />
        <figcaption>Logo Nu Kenzie</figcaption>
      </figure>
      <button
        onClick={() => {
          document.querySelector(".Top").style.display = "flex";
          document.querySelector(".user-page").style.display = "none";
        }}
      >
        Inicio
      </button>
    </header>
  );
};

export default Header;

import "./styles.css";
import Logo from "./img/NuKenzie.svg";

const Header = ({ showPage, setShowPage }) => {
  return (
    <header className="header">
      <figure>
        <img src={Logo} alt="logo" />
        <figcaption>Logo Nu Kenzie</figcaption>
      </figure>
      <button
        onClick={() => {
          setShowPage(!showPage);
        }}
      >
        Inicio
      </button>
    </header>
  );
};

export default Header;

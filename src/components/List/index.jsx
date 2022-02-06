import Card from "../Card";
import image from "./img/NoCard.svg";
import { useState } from "react";
import "./styles.css";

const List = ({ listTransactions, setListTransactions }) => {
  const [showEntradas, setShowEntradas] = useState(false);

  const [showDespesas, setShowDespesas] = useState(false);

  const showAll = () => {
    const list = document.querySelector(".list");
    list.style.display = "initial";
    setShowEntradas(false);
    document.querySelector(".entradas").style.display = "none";
    document.querySelector(".despesas").style.display = "none";
  };

  const openEntradas = () => {
    setShowEntradas(true);
    document.querySelector(".list").style.display = "none";
    document.querySelector(".despesas").style.display = "none";
    document.querySelector(".entradas").style.display = "initial";
  };

  const openDespesas = () => {
    setShowDespesas(true);
    document.querySelector(".list").style.display = "none";
    document.querySelector(".entradas").style.display = "none";
    document.querySelector(".despesas").style.display = "initial";
  };

  return (
    <div className="resume">
      <div className="menu">
        <p>Resumo financeiro</p>
        <div className="buttons">
          <button id="todos" onClick={showAll}>
            Todos
          </button>
          <button onClick={openEntradas}>Entradas</button>
          <button onClick={openDespesas}>Despesas</button>
        </div>
      </div>
      <div className="emptyList">
        {listTransactions.length === 0 ? (
          <div className="box">
            <p>Você ainda não possui nenhum lancamento</p>
            <figure>
              <img src={image} alt="No card" />
              <figcaption>No card</figcaption>
            </figure>
          </div>
        ) : (
          <ul className="list">
            {listTransactions.map((transaction, index) => (
              <Card
                transaction={transaction}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                key={index}
              />
            ))}
          </ul>
        )}

        {showEntradas ? (
          <ul className="entradas">
            {listTransactions.map((transaction, index) =>
              transaction.type === "Entrada" ? (
                <Card
                  transaction={transaction}
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  key={index}
                />
              ) : null
            )}
          </ul>
        ) : null}

        {showDespesas ? (
          <ul className="despesas">
            {listTransactions.map((transaction, index) =>
              transaction.type === "Despesa" ? (
                <Card
                  transaction={transaction}
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  key={index}
                />
              ) : null
            )}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default List;

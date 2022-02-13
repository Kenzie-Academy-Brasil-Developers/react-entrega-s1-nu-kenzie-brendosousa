import Card from "../Card";
import image from "./img/NoCard.svg";
import "./styles.css";

const List = ({
  listTransactions,
  setListTransactions,
  listEntries,
  listExpenses,
}) => {
  return (
    <div className="resume">
      <div className="menu">
        <p>Resumo financeiro</p>
        <div className="buttons">
          <button
            id="todos"
            onClick={() => {
              listEntries(false);
              listExpenses(false);
            }}
          >
            Todos
          </button>
          <button
            onClick={() => {
              listEntries(true);
              listExpenses(false);
            }}
          >
            Entradas
          </button>
          <button
            onClick={() => {
              listEntries(false);
              listExpenses(true);
            }}
          >
            Despesas
          </button>
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
      </div>
    </div>
  );
};

export default List;

import "./styles.css";

const Card = ({ transaction, listTransactions, setListTransactions }) => {
  const handleList = (toRemove, listTransactions, setListTransactions) => {
    const filtred = listTransactions.filter((item) => {
      return item !== toRemove;
    });
    setListTransactions([...filtred]);
  };

  return (
    <div id={transaction.type} className="boxCard">
      <div className="data">
        <p id="desc">{transaction.description}</p>
        <p id="price">
          R$ {Number(transaction.value).toFixed(2).replace(".", ",")}
        </p>
        <p id="type">{transaction.type}</p>
      </div>
      <button
        className="remover"
        onClick={() =>
          handleList(transaction, listTransactions, setListTransactions)
        }
      >
        Remover
      </button>
    </div>
  );
};

export default Card;

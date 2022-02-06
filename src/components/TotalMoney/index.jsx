import "./styles.css";

const TotalMoney = ({ listTransactions }) => {
  //através de um reduce, fará a somatória dos valores de todas as transações.

  const totalPrice = listTransactions.reduce((acum, actual) => {
    return Number(actual.value) + acum;
  }, 0);

  return (
    <div className="boxTotal">
      <p>Valor total:</p>
      <p>$ {totalPrice}</p>
    </div>
  );
};

export default TotalMoney;

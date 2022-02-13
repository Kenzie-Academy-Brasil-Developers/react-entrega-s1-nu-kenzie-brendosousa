import "./styles.css";

const TotalMoney = ({ listTransactions }) => {
  const entries = listTransactions.filter((item) => {
    return item.type === "Entrada";
  });

  const expenses = listTransactions.filter((item) => {
    return item.type === "Despesa";
  });

  const totalPriceEntries = entries.reduce((acum, actual) => {
    return Number(actual.value) + acum;
  }, 0);

  const totalPriceExpenses = expenses.reduce((acum, actual) => {
    return Number(actual.value) + acum;
  }, 0);

  const totalPrice = totalPriceEntries - totalPriceExpenses;

  return (
    <div className="boxTotal">
      <p>Valor total:</p>
      <p>$ {totalPrice}</p>
    </div>
  );
};

export default TotalMoney;

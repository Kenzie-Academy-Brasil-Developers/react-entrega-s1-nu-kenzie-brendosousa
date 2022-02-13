import Header from "./..//Header";
import Form from "./..//Form";
import List from "./../List";
import TotalMoney from "./../TotalMoney";
import { useState } from "react";
import "./styles.css";

const UserPage = ({ showPage, setShowPage }) => {
  const [listTransactions, setListTransactions] = useState([]);

  const [entries, setEntries] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const [showEntries, setShowEntries] = useState(false);
  const [showExpenses, setShowExpenses] = useState(false);

  const listEntries = (isSet) => {
    setEntries(
      listTransactions.filter((item) => {
        return item.type === "Entrada";
      })
    );
    setShowEntries(isSet);
  };

  const listExpenses = (isSet) => {
    setExpenses(
      listTransactions.filter((item) => {
        return item.type === "Despesa";
      })
    );
    setShowExpenses(isSet);
  };

  return (
    <div className="user-page">
      <Header showPage={showPage} setShowPage={setShowPage} />

      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />

      {listTransactions.length > 0 ? (
        <TotalMoney listTransactions={listTransactions} />
      ) : null}

      {showEntries ? (
        <List
          listTransactions={entries}
          setListTransactions={setEntries}
          listEntries={listEntries}
          listExpenses={listExpenses}
          className="lista"
        />
      ) : showExpenses ? (
        <List
          listTransactions={expenses}
          setListTransactions={setExpenses}
          listEntries={listEntries}
          listExpenses={listExpenses}
          className="lista"
        />
      ) : (
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          listEntries={listEntries}
          listExpenses={listExpenses}
          className="lista"
        />
      )}
    </div>
  );
};

export default UserPage;

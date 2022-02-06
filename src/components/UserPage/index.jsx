import Header from "./..//Header";
import Form from "./..//Form";
import List from "./../List";
import TotalMoney from "./../TotalMoney";
import Card from "../Card";
import { useState } from "react";
import "./styles.css";

const UserPage = () => {
  const [listTransactions, setListTransactions] = useState([]);

  const filtredEntradas = () => {
    const filtred = listTransactions.filter((item) => {
      return item.type === "Entrada";
    });
    setListTransactions([...filtred]);
  };

  const filtredDespesas = listTransactions.filter((item) => {
    return item.type === "Despesa";
  });

  return (
    <div className="user-page">
      <Header />

      <Form
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />

      {listTransactions.length > 0 ? (
        <TotalMoney listTransactions={listTransactions} />
      ) : null}

      <List
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
        className="lista"
      />
      {console.log(listTransactions)}
    </div>
  );
};

export default UserPage;

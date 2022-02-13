import { useState } from "react";
import "./styles.css";
import toast, { Toaster } from "react-hot-toast";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const prev = (e) => {
    e.preventDefault();
  };

  const notify = () =>
    toast.error("Os campos de descrição e valor devem ser preenchidos");

  return (
    <form onSubmit={prev} className="form">
      <label className="description">
        Descrição
        <input
          placeholder="Digite aqui sua descrição"
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <p>Ex: Compra de roupas</p>
      </label>

      <div className="values">
        <label>
          Valor
          <input
            type="number"
            placeholder="1         R$"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </label>

        <label>
          Tipo de valor
          <select
            name="type"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </label>
      </div>

      <button
        onClick={() =>
          description && value > 0
            ? setListTransactions([
                ...listTransactions,
                {
                  description: description,
                  value: value,
                  type: type,
                },
              ])
            : notify()
        }
      >
        Inserir valor
      </button>
      <Toaster />
    </form>
  );
};

export default Form;

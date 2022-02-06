import { useState } from "react";
import "./styles.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");

  const prev = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={prev} className="form">
      <label className="description">
        Descrição
        <input
          placeholder="Digite aqui sua descrição"
          type="text"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />
        <p>Ex: Compra de roupas</p>
      </label>

      <div className="values">
        <label>
          Valor
          <input
            type="number"
            placeholder="1         R$"
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
        </label>

        <label>
          Tipo de valor
          <select
            name="type"
            id="type"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </label>
      </div>

      <button
        onClick={() =>
          descricao && valor > 0
            ? setListTransactions([
                ...listTransactions,
                {
                  description: descricao,
                  value: valor,
                  type: tipo,
                },
              ])
            : alert("Os campos de descrição e valor devem ser preenchidos")
        }
      >
        Inserir valor
      </button>
    </form>
  );
};

export default Form;

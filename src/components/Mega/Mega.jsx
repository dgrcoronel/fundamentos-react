import { useState } from "react";
import "./Mega.css";

function gerarNumeros(quant) {
  let numeros = [];
  while (numeros.length < quant) {
    if (numeros.indexOf(numeros) < 0) {
      numeros.push(Math.ceil(Math.random() * 60));
    }
  }
  return numeros;
}

const Mega = (props) => {
  const [quantidade, setQuantidade] = useState(props.quant || 6);
  // const numerosIniciais = Array(quantidade).fill(0);
  const [numeros, setNumeros] = useState(gerarNumeros(quantidade));

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(" - ")}</h3>
      <div>
        <label>Quantidade de Números</label>
        <input
          type="number"
          min={6}
          max={17}
          value={quantidade}
          onChange={(e) => {
            setQuantidade(+e.target.value);
            setNumeros(gerarNumeros(quantidade));
          }}
        />
      </div>
      <button onClick={(e) => setNumeros(gerarNumeros(quantidade))}>
        Gerar Números
      </button>
    </div>
  );
};

export default Mega;

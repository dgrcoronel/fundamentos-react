import React from "react";

const IndiretaFilho = (props) => {
  const cb = props.quandoClicar;
  console.log("cb", cb);
  return (
    <div>
      <div>Filho</div>
      <button onClick={(e) => cb("João", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};

export default IndiretaFilho;

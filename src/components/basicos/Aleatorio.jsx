// Retorna um número entre dois valores definidos. 
// O valor retornado será maior ou igual a min, e menor que max.
function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const Aleatorio = (props) => {
  const { min, max } = props;
  const aleatorio = getRandomArbitrary(min, max);
  return (
    <div>
      <h2>Aleatório</h2>
      <p>
        Número aleatório: {aleatorio} (entre {min} e {max})
      </p>
    </div>
  );
}

export default Aleatorio;

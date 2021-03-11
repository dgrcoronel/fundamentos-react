const Display = (props) => {
  return (
    <div>
      <button onClick={props.setInc}>+</button>
      <button onClick={props.setDec}>-</button>
    </div>
  );
};

export default Display;

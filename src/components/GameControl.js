export default function GameControl(props) {
  return (
    <div className="gameControl">
      <h6>difficulty:</h6>
      <button onClick={props.lessDices}>-</button>
      <p>{props.numberOfDicesWanted} dices</p>
      <button onClick={props.moreDices}>+</button>
    </div>
  );
}

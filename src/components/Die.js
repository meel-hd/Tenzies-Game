export default function Die(props) {
  return (
    <div
      className="die"
      id={props.isHeld ? "held" : "die"}
      onClick={props.handleHold}
    >
      {props.value}
    </div>
  );
}

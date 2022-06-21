import GameControl from "./GameControl";
export default function ScoreBoard(props) {
  //setting the best score
  if (!localStorage.getItem("tenziesBest")) {
    localStorage.setItem("tenziesBest", props.rolls);
    return;
  } else if (localStorage.getItem("tenziesBest") > props.rolls) {
    localStorage.setItem("tenziesBest", props.rolls);
  }
  return (
    <div className="scoreBoard">
      <h1>YOU WON! 🎉🎈</h1>
      <div>
        <p>rolls:{props.rolls}</p>
        <p className="best--score">
          Best {localStorage.getItem("tenziesBest")}
        </p>
      </div>
      <button onClick={props.handleWining} className="button--main">
        new game
      </button>
      <GameControl
        lessDices={props.lessDices}
        moreDices={props.moreDices}
        numberOfDicesWanted={props.numberOfDicesWanted}
      />
    </div>
  );
}

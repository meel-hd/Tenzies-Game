import React from "react";
import Die from "./Die";
import ScoreBoard from "./ScoreBoard";

//number of the rolls
var numberOfRolls = 0;

//the main component of the app
export default function Main() {
  //Hooks from state management and side effects
  const [tenzies, setTenzies] = React.useState(false);
  const [numberOfDicesWanted, setNumberOfDicesWanted] = React.useState(10);
  const [dices, setDices] = React.useState(random10Dies());
  //checking on every roll if the player won
  React.useEffect(() => {
    const allHeld = dices.every((die) => die.isHeld);
    const firstValue = dices[0].value;
    const allSameValue = dices.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dices]);
  //array of objects holding the data of all the dices
  function random10Dies() {
    let random10Arr = [];
    for (let i = 1; i < numberOfDicesWanted + 1; i++) {
      let randomNum = Math.ceil(Math.random() * 6);
      random10Arr.push({
        value: randomNum,
        isHeld: false,
        id: Math.random(),
      });
    }
    return random10Arr;
  }
  function lessDices() {
    if (numberOfDicesWanted === 5) {
      return;
    }
    setNumberOfDicesWanted((prevNum) => prevNum - 5);
  }
  function moreDices() {
    if (numberOfDicesWanted === 40) {
      return;
    }
    setNumberOfDicesWanted((prevNum) => prevNum + 5);
  }
  //creating dies components based on the array of objects of the dies created before
  const randNumsDies = dices.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        handleHold={() => holdDice(die.id)}
      />
    );
  });

  //rolling the dices without the ones are holded
  function roll() {
    // !dices ? setDices(random10Dies()) :
    setDices((prevDices) =>
      prevDices.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 9) };
      })
    );
    numberOfRolls++;
  }
  //reset the game and the dices as new
  function newGame() {
    setDices(random10Dies());
    setTenzies(false);
    numberOfRolls = 0;
  }
  //making the dice unchangale
  function holdDice(id) {
    setDices((prevDices) =>
      prevDices.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  //the Main UI
  return (
    <main className="main">
      <h2>
        <a href="facebook.com">Hle</a>
      </h2>
      <h1>Tenzies</h1>
      <small>{numberOfRolls}</small>
      <p className="help--text">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dies--grid">{randNumsDies}</div>
      {!tenzies && (
        <button className="button--main" onClick={roll}>
          roll
        </button>
      )}
      {tenzies && (
        <ScoreBoard
          lessDices={lessDices}
          moreDices={moreDices}
          rolls={numberOfRolls}
          numberOfDicesWanted={numberOfDicesWanted}
          handleWining={newGame}
        />
      )}
    </main>
  );
}

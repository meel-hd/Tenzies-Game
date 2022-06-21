import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [windowHieght, setWindowHieght] = React.useState(window.innerHeight);

  React.useEffect(() => {
    function updateDemonsions() {
      setWindowWidth(window.innerWidth);
      setWindowHieght(window.innerHeight);
    }
    console.log("setting up");
    window.addEventListener("resize", updateDemonsions);

    return () => {
      console.log("cleaning up");
      window.removeEventListener("resize", updateDemonsions);
    };
  });

  return (
    <div>
      <h2>window width: {windowWidth}</h2>
      <h2>window hieght: {windowHieght}</h2>
    </div>
  );
}

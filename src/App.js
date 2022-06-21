import React from "react";
import "./components/app.css";
import WindowTracker from "./components/WindowTracker";
export default function App() {
  const [show, setShow] = React.useState(true);
  const [isDark, setIsDark] = React.useState(false);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  function changeMode() {
    setIsDark((prevMode) => !prevMode);
  }
  return (
    <div className={isDark ? "dark--mode" : "light--mode"}>
      <button onClick={toggle}>{show ? "hide" : "show"}</button>

      {show && <WindowTracker />}

      <label>
        <input type="checkbox" onChange={changeMode} checked={isDark} /> Dark
        Mode
      </label>
    </div>
  );
}

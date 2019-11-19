import React, { useState } from "react";
import "./App.css";
import Scoreboard from "./Scoreboard";
import ButtonContainer from "./ButtonsContainer";

function App() {
  const [score, setScore] = useState({ homeScore: 0, awayScore: 0 });

  return (
    <div className="container">
      <Scoreboard score={score} />
      <ButtonContainer score={score} setScore={setScore} />
    </div>
  );
}

export default App;

//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

function App() {
  const [score, setScore] = useState({ homeScore: 0, awayScore: 0 });

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow score={score} />
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons score={score} setScore={setScore} />
        <AwayButtons score={score} setScore={setScore} />
      </section>
    </div>
  );
}

export default App;

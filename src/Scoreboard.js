import React from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";

const Scoreboard = props => {
  return (
    <section className="scoreboard">
      <TopRow score={props.score} />
      <BottomRow />
    </section>
  );
};

export default Scoreboard;

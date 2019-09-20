import React from "react";
import "./App.css";

const Away = props => {
  return (
    <div className="away">
      <h2 className="away__name">Lions</h2>
      <div className="away__score">{props.score.awayScore}</div>
    </div>
  );
};

export default Away;

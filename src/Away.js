import React from "react";

const Away = props => {
  return (
    <div className="away">
      <h2 className="away__name">Tigers</h2>
      <div className="away__score">{props.score.awayScore}</div>
    </div>
  );
};

export default Away;

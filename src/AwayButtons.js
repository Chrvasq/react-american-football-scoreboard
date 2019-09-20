import React from "react";
import "./App.css";

const AwayButtons = props => {
  return (
    <div className="awayButtons">
      <button
        className="awayButtons__touchdown"
        onClick={() => {
          props.setScore({
            homeScore: props.score.homeScore,
            awayScore: props.score.awayScore + 7
          });
        }}
      >
        Away Touchdown
      </button>
      <button
        className="awayButtons__fieldGoal"
        onClick={() => {
          props.setScore({
            homeScore: props.score.homeScore,
            awayScore: props.score.awayScore + 3
          });
        }}
      >
        Away Field Goal
      </button>
    </div>
  );
};

export default AwayButtons;

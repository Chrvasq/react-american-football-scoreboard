import React from "react";

const HomeButtons = props => {
  return (
    <div className="homeButtons">
      <button
        className="homeButtons__touchdown"
        onClick={() => {
          props.setScore({
            homeScore: props.score.homeScore + 7,
            awayScore: props.score.awayScore
          });
          console.log(props.score);
        }}
      >
        Home Touchdown
      </button>
      <button
        className="homeButtons__fieldGoal"
        onClick={() => {
          props.setScore({
            homeScore: props.score.homeScore + 3,
            awayScore: props.score.awayScore
          });
        }}
      >
        Home Field Goal
      </button>
    </div>
  );
};

export default HomeButtons;

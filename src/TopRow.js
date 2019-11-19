import React from "react";
import Home from "./Home";
import Timer from "./Timer";
import Away from "./Away";

const TopRow = props => {
  return (
    <div className="topRow">
      <Home score={props.score} />
      <Timer />
      <Away score={props.score} />
    </div>
  );
};

export default TopRow;

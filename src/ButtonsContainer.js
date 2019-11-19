import React from "react";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

const ButtonContainer = props => {
  return (
    <section className="buttons">
      <HomeButtons score={props.score} setScore={props.setScore} />
      <AwayButtons score={props.score} setScore={props.setScore} />
    </section>
  );
};

export default ButtonContainer;
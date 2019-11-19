import React from "react";

const Home = props => {
  return (
    <div className="home">
      <h2 className="home__name">Lions</h2>
      <div className="home__score">{props.score.homeScore}</div>
    </div>
  );
};

export default Home;

import React from "react";
import Jumbotron from "./Jumbotron";

export const Home = () => {
  return (
    <div className="bg-light   text-dark p-0">
      <Jumbotron image="./img/board.jpg" />
      <div className="ui container py-5">
        <h2>This is the home page</h2>
      </div>
    </div>
  );
};

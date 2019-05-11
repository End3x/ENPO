import React from "react";
import Jumbotron from "./Jumbotron";

export const Home = () => {
  return (
    <div className="bg-light   text-dark p-0">
      <Jumbotron image="./img/board.jpg" />
      <div
        style={{
          backgroundColor: "#0a5794",
          position: "relative",
          width: "40vw",
          marginTop: "-8vh",
          left: "30vw",
          color: "white",
          fontWeight: "bold",
          padding: "3% 0"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bolder"
          }}
        >
          We rise by lifting others!
        </h2>
      </div>
      <div
        className="ui container text-justify"
        style={{ fontSize: "2rem", padding: "5%" }}
      >
        <p>
          ENPO is driven by the vision to build a strong community both in
          Norway and Ethiopia that shares ideas, skills, and resources to enrich
          lives. By Utilizing our maximum human, social and financial capital to
          fulfill our vision. “We rise by lifting others!”
        </p>
        <p>
          ENPO is a non-profit, non-political, and non-religious organization
          which mainly focuses in promoting and supporting development through
          human and institutional capacity strengthening in Ethiopia. ENPO aims
          to operate in partnership with development agencies and investment
          forces in Norway and beyond.
        </p>
      </div>
    </div>
  );
};

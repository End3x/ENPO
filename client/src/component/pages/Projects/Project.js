import React from "react";
import data from "./data";

export default ({ match }) => {
  const { id } = match.params;
  return (
    <div className="p-5">
      <p key={id}>{data[id]["description"]}</p>
    </div>
  );
};

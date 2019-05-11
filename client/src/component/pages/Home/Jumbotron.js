import React from "react";

export default props => {
  return (
    <div style={{ maxHeight: "60vh", overflow: "hidden" }}>
      <img
        src={props.image}
        alt="ENPO board"
        style={{ position: "relative", maxWidth: "100vw" }}
      />
    </div>
  );
};

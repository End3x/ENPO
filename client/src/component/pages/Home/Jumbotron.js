import React from "react";

export default props => {
  return (
    <div style={{ minHeight: "65vh", maxHeight: "75vh", overflow: "hidden" }}>
      <img src={props.image} alt="ENPO board" style={{ width: "100vw" }} />
    </div>
  );
};

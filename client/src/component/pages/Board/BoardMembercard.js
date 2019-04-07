import React from "react";

const Membercard = props => {
  return (
    <div className="card ">
      <img className="card-img-top" alt="" src={props.image} />
      <div className="card-body ">
        <h5 className="card-title ">{props.name}</h5>

        <p className="card-text">{props.orgrole}</p>
      </div>
    </div>
  );
};

export default Membercard;

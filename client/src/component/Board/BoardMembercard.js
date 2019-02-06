import React from "react";

const Membercard = props => {
  return (
    <div className="ui segment d-flex ">
      <div className="card ">
        <img
          className="card-img-top"
          alt=""
          src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198-500x500.jpg"
        />
        <div className="card-body ">
          <h5 className="card-title ">{props.name}</h5>

          <p className="card-text">{props.profession}</p>
        </div>
      </div>

      <div className="container">board member description</div>
    </div>
  );
};

export default Membercard;

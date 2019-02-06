import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <button class="btn btn-light my-0 ">
      <Link to={props.to}>{props.lable}</Link>
    </button>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Link className="nav-link" to={props.to}>
      {props.lable}
    </Link>
  );
};

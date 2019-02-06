import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Link className="item " to={props.to}>
      {props.lable}
    </Link>
  );
};

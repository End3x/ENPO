import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default props => {
  return (
    <Link className="item " to={props.to}>
      {props.lable}
    </Link>
  );
};

import React from "react";

import NavLink from "./NavLink";

import "./navbar.css";
export default () => {
  return (
    <div className=" bg-dark text-white py-3 fixed-top position-sticky">
      <div className="ui pointing menu container">
        <NavLink to="/" lable="Home" />
        <NavLink to="/events" lable="Events" />
        <NavLink to="/members" lable="Memebers" />
        <NavLink to="/projects" lable="Projects" />
        <NavLink to="/about" lable="About" />
        <NavLink to="/board" lable="Board" />
        <div className="right menu">
          <NavLink
            className="outline-primary"
            to="/sign-in"
            lable="Sing in / Sign up"
          />
        </div>
      </div>
    </div>
  );
};

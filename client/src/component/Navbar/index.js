import React from "react";

import NavLink from "./NavLink";

import "./navbar.css";
export default () => {
  return (
    <div className=" bg-primary text-white fixed-top position-sticky">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" lable="Home" />
            </li>

            <li className="nav-item ">
              <NavLink to="/events" lable="Events" />
            </li>

            <li className="nav-item ">
              <NavLink to="/members" lable="Memebers" />
            </li>

            <li className="nav-item ">
              <NavLink to="/projects" lable="Projects" />
            </li>

            <li className="nav-item ">
              <NavLink to="/about" lable="About" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

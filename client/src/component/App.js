import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Members from "./Members";
import Projects from "./Projects";
import Board from "./Board";
import SignIn from "./SingIn";

export default () => {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <div style={{ minHeight: "80vh" }}>
          <Navbar />
          <Route path="/" exact render={Home} />
          <Route path="/about" render={About} />
          <Route path="/events" render={Events} />
          <Route path="/members" render={Members} />
          <Route path="/projects" render={Projects} />
          <Route path="/board" render={Board} />
          <Route path="/sign-in" render={SignIn} />
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

import React from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ProtectedRoute } from "./ProtectedRoute";

import { Home, Board, SignIn, Events, Projects, About, Members } from "./pages";

export default () => {
  return (
    <div>
      <Header />

      <Switch>
        <div style={{ minHeight: "80vh" }}>
          <Navbar />

          <Route path="/" exact render={Home} />
          <Route path="/about" render={About} />
          {/* <Route path="/events" render={Events} />
          <ProtectedRoute path="/members" render={Members} /> */}
          <Route path="/projects" render={Projects} />
          <Route path="/board" render={Board} />
          {/* <Route path="/sign-in" render={SignIn} /> */}
        </div>
      </Switch>
      <Footer />
    </div>
  );
};

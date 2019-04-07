import React from "react";
import { Route, Link } from "react-router-dom";
import data from "./data";

import Project from "./Project";

export const Projects = () => {
  return (
    <div className="bg-light ">
      <div className=" ui container text-dark py-5 grid">
        <div className="ui four wide column py-5  ">
          <div className="  position-sticky fixed-top-2">
            {data.map((entry, index) => {
              return (
                <Link key={index} to={`/projects/project/${index}`}>
                  <div
                    className={
                      index === 0
                        ? "ui segment py-3 my-3 inverted"
                        : "ui segment py-3 my-3"
                    }
                  >
                    {entry["title"]}
                  </div>
                </Link>
              );
            })}
          </div>
          <div />
        </div>

        <div className="ui twelve wide column ">
          <Route path="/projects/project/:id" render={Project} />
        </div>
      </div>
    </div>
  );
};

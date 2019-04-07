import React from "react";
import data from "./ledger.json";

export const Members = () => {
  console.log(
    data.map(entry => {
      return Object.keys(entry).map(info => {
        return entry[info];
      });
    })
  );

  return (
    <div className="bg-light   text-dark py-5">
      <div className="ui container">
        <h2>This is the members page</h2>

        <div className="list-group d-flex" />
        <div className="list-group-item ">
          {data.map(user => {
            return Object.keys(user).map(info => {
              if (info !== "userName") {
                return user[info] + " ";
              }
              return "";
            });
          })}
        </div>
      </div>
    </div>
  );
};

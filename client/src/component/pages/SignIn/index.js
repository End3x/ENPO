import React from "react";
import auth from "../../ProtectedRoute/auth";

export const SignIn = props => {
  return (
    <div className="bg-light text-dark py-5">
      <div className="ui container">
        <h2>This is the sing in / sign up page</h2>
        <button
          className="button btn-primary"
          onClick={() => {
            auth.login(() => {
              props.history.push("/members");
            });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

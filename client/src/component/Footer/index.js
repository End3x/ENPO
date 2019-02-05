import React from "react";

export default () => {
  return (
    <div className="bg-primary text-white">
      <div className="ui container">
        <div class="ui two column very relaxed stackable grid">
          <div class="column">
            <div className="ui list">
              <div className="item">Addresse: Dronningensgate 30</div>
              <div className="item">Telefon: 93248733</div>
              <div className="item">E-post: abebe.bediye@gmail.com</div>
            </div>
          </div>
          <div class="middle aligned column">
            <div class="ui big button">
              <i class="signup icon" />
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "../Header/static.css";

export default () => {
  return (
    <div className="bg-enpo-primary text-white py-5">
      <div className="ui container">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui list">
              <div className="item">Addresse: PO-box Placeholder</div>
              <div className="item">Telefon: 406 72 665</div>
              <div className="item">E-post: ethionorway@e-npn.org</div>

              <div className="item">Org. number: 921557876</div>
            </div>
          </div>
          <div className="middle aligned column" />
        </div>
      </div>
    </div>
  );
};

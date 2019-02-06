import React from "react";
import MemberCard from "./BoardMembercard";

export default () => {
  return (
    <div className="bg-dark text-dark py-5">
      <div className="ui container">
        <div className="ui pb-5">
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
        </div>
      </div>
    </div>
  );
};

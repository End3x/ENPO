import React from "react";
import MemberCard from "./Membercard";

import "./member.css";

export default () => {
  return (
    <div className="bg-dark text-dark py-5">
      <div className="ui container">
        <div className="ui search mb-3 p-2 border-radius-0 ">
          <input
            className="prompt"
            type="text"
            placeholder="Search for name, profession, project"
          />
        </div>
        <div className="ui link cards pb-5">
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
          <MemberCard name="Abebe Bediye" profession="Computer science" />
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

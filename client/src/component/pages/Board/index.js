import React from "react";
import MemberCard from "./BoardMembercard";

export const Board = () => {
  return (
    <div className="bg-light text-dark py-5">
      <div className="ui container">
        <div className="ui three cards">
          <MemberCard
            name="Selamawit Jimma"
            orgrole="Managment Team Leader"
            image="./img/img_profile/Selam.jpeg"
          />
          <MemberCard
            name="Shegaw A. Mengiste"
            orgrole="Managing Director"
            image="./img/img_profile/Shegaw.jpg"
          />
          <MemberCard
            name="Tensae Teshome Seifu"
            orgrole="Member"
            image="./img/img_profile/Tensae.jpg"
          />
          <MemberCard
            name="Abyot Asalefew"
            orgrole="Member"
            image="./img/img_profile/Abyot.jpg"
          />
          <MemberCard
            name="Alene Tesfamichael"
            orgrole="Member"
            image="./img/img_profile/Alene.jpg"
          />
          <MemberCard
            name="Mirtu Beyene"
            orgrole="Member"
            image="./img/img_profile/Mirtu.jpg"
          />
        </div>
      </div>
    </div>
  );
};

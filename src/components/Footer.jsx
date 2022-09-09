import React from "react";

// Media
import inst from "../assets/icons/instagram.svg";
import yt from "../assets/icons/youtube.svg";

export default function Footer() {
  return (
    <div style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
      British International School App © 2022 &nbsp;
      <a href="https://www.instagram.com/bisbaq/">
        <img src={inst} alt="" className="icons" />
      </a>
      <a href="https://www.youtube.com/c/BritishInternationalSchool">
        <img src={yt} alt="" className="icons" />
      </a>
    </div>
  );
}

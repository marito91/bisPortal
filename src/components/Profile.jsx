import React, { useState } from "react";

// Components
import Personal from ".//sections/Personal";
import Family from ".//sections/Family";
import Contracts from ".//sections/Contracts";
import Sociodemo from "./sections/Sociodemo";

// Media
import resume from "../assets/icons/resume.png";
import family from "../assets/icons/family.png";
import work from "../assets/icons/work.png";
import contract from "../assets/icons/contract.png";

// CSS
import "../styles/Profile.css";

export default function Profile() {
  const [selected, setSelected] = useState(<Personal />);
  return (
    <div>
      <div className="title-page">
        <div>&nbsp;</div>
        <div id="title-div">
          <h1>Perfil</h1>
        </div>
        <div>&nbsp;</div>
      </div>
      <div className="profile-container">
        <div className="sections">
          <div onClick={() => setSelected(<Personal />)}>
            <img src={resume} alt="" />
            <br id="hidden" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Información Personal
            </label>
          </div>
          <div onClick={() => setSelected(<Family />)}>
            <img src={family} alt="" />
            <br id="hidden" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Información Familiar
            </label>
          </div>
          <div onClick={() => setSelected(<Contracts />)}>
            <img src={contract} alt="" />
            <br id="hidden" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Historial Laboral
            </label>
          </div>
          <div onClick={() => setSelected(<Sociodemo />)}>
            <img src={work} alt="" />
            <br id="hidden" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Info. Sociodemográfica
            </label>
          </div>
        </div>
      </div>
      <div className="information">{selected}</div>
    </div>
  );
}

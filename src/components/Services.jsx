import React, { useState } from "react";

// CSS
import "../styles/Services.css";

// Media
import library from "../assets/icons/library.png";
import it from "../assets/icons/it.png";
import admin from "../assets/icons/admin.png";
import events from "../assets/icons/events.png";
import KnowledgeCentre from "./services/KnowledgeCentre";
import Tics from "./services/Tics";
import Admin from "./services/Admin";

// Components
import "./services/KnowledgeCentre";

export default function Services() {
  const [selected, setSelected] = useState(<></>);
  return (
    <div>
      <div className="title-page">
        <div>&nbsp;</div>
        <div id="title-div">
          <h1>Servicios</h1>
        </div>
        <div>&nbsp;</div>
      </div>
      <div className="services-section">
        <div className="services">
          <div onClick={() => setSelected(<KnowledgeCentre />)}>
            <img src={library} alt="" />
            <br id="hidden" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Knowledge Centre
            </label>
          </div>
          <div onClick={() => setSelected(<Tics />)}>
            <img src={it} alt="" />
            <br id="hidden" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              TICs
            </label>
          </div>
          <div onClick={() => setSelected(<Admin />)}>
            <img src={admin} alt="" />
            <br id="hidden" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Administración
            </label>
          </div>
        </div>
      </div>
      <div className="information">{selected}</div>
    </div>
  );
}

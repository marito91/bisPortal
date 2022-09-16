import React, { useState } from "react";

// Components
import Personal from ".//sections/Personal";
import Family from ".//sections/Family";
import Contracts from ".//sections/Contracts";
import History from ".//sections/History";
import Studies from ".//sections/Studies";

// Media
import resume from "../assets/icons/resume.png";
import family from "../assets/icons/family.png";
import diploma from "../assets/icons/diploma.png";
import work from "../assets/icons/work.png";
import contract from "../assets/icons/contract.png";

// CSS
import "../styles/Profile.css";

export default function Profile() {
  // const sections = ["resume", "family", "diploma", "work", "contract"];
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
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Información Personal
            </label>
          </div>
          <div onClick={() => setSelected(<Family />)}>
            <img src={family} alt="" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Información Familiar
            </label>
          </div>
          <div onClick={() => setSelected(<Contracts />)}>
            <img src={contract} alt="" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Historial Contractual
            </label>
          </div>
          <div onClick={() => setSelected(<History />)}>
            <img src={work} alt="" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Historial Laboral
            </label>
          </div>
          <div id="last-div" onClick={() => setSelected(<Studies />)}>
            <img src={diploma} alt="" />
            <br id="hidden" />
            <label htmlFor="" style={{ marginLeft: "2%" }}>
              Estudios
            </label>
          </div>
        </div>
        <div className="information">{selected}</div>
      </div>

      {/*
      <h1 style={{ textAlign: "center" }}>Editar perfil</h1>
      <div>
        <h3 style={{ textAlign: "center" }}>Tus datos</h3>
        <div>
          <label htmlFor="">Nombre:</label>&nbsp;&nbsp;&nbsp;
          <label htmlFor="">Mario Andres Gomez Vargas</label>
        </div>
        <div>
          <label htmlFor="">Documento de Identidad:</label>
          &nbsp;&nbsp;&nbsp;
          <label htmlFor="">1044427366</label>
        </div>
        <div>
          <label htmlFor="">Fecha de Nacimiento:</label>&nbsp;&nbsp;&nbsp;
          <label htmlFor="">18/10/1991</label>
        </div>
        <div>
          <label htmlFor="">Correo:</label>&nbsp;&nbsp;&nbsp;
          <label htmlFor="">mariogomez@britishschool.edu.co</label>
        </div>
        <div>
          <label htmlFor="">Dirección:</label>&nbsp;&nbsp;&nbsp;
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Teléfono:</label>&nbsp;&nbsp;&nbsp;
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Correo personal:</label>&nbsp;&nbsp;&nbsp;
          <input type="text" />
        </div>
        <div style={{ textAlign: "center", marginTop: "4%" }}>
          <button className="btn">Confirmar</button>
        </div>
        <p>*Algunos datos no pueden ser editados.</p>
      </div>
  */}
    </div>
  );
}

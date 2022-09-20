import React, { useState, useEffect } from "react";
import requests from "../data/requests";
import users from "../data/users";

// CSS
import "../styles/Requests.css";

export default function Requests() {
  // Se filtran los usuarios que tienen rol de admin para asignarlos a las opciones de envío de solicitud
  const admins = users.filter((user) => user.role === "admin");

  const [chosenUpdate, setChosenUpdate] = useState("");

  let information = requests.filter((info) => info.type === chosenUpdate);

  return (
    <div>
      <div className="title-page">
        <div>&nbsp;</div>
        <div id="title-div">
          <h1>Solicitudes</h1>
        </div>
        <div>&nbsp;</div>
      </div>
      <div className="requests-section">
        <div className="updates">
          <h3>Sus solicitudes</h3>
          <div className="recent">
            {requests.map((certificado) => (
              // Se hace un map de todos los tipos de certificado y se agrega la función onClick para que el usuario escoja la que quiere que se despliegue asociando al chosenUpdate state.
              <>
                <div onClick={() => setChosenUpdate(`${certificado.type}`)}>
                  {certificado.type}
                </div>
              </>
            ))}
          </div>
          <div id="option" className="option">
            {information.map((infor) => infor.info)}
          </div>
        </div>
        <div className="requests">
          <h3>Crear solicitud</h3>
          <div>
            <form action="">
              <label htmlFor="">¿A quién le envía esta solicitud?</label>
              <select name="" id="">
                <option value="">-Seleccione un usuario-</option>
                {admins.map((admin) => (
                  <option value="">{admin.name}</option>
                ))}
              </select>
              <label htmlFor="">Seleccione el tipo de solicitud:</label>
              <select name="" id="">
                <option value="">- Seleccione una opción -</option>
                <option value="cl">Certificado Laboral</option>
                <option value="l">Libranza</option>
                <option value="p">Permiso</option>
                <option value="rb">Registro de beneficiarios</option>
                <option value="c">Capacitación</option>
                <option value="v">Vacaciones</option>
              </select>
              <div className="files">
                <div>
                  <label htmlFor="">
                    Seleccione el <strong>formato</strong> requerido en PDF
                  </label>
                  <input type="file" name="" id="" />
                </div>
                <div>
                  <label htmlFor="">
                    Adicione <strong>soporte</strong> en caso de ser necesario
                  </label>
                  <input type="file" name="" id="" />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <input type="submit" value="Enviar solicitud" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

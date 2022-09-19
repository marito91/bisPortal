import React, { useState } from "react";
import historial from "../../data/historial";
import estudios from "../../data/estudios";

// Media
import edit from "../../assets/icons/edit.png";
import contract from "../../assets/icons/contracticon.png";

export default function Contracts() {
  // Se inicia el estado del modal en falso para que esté escondido.
  const [isActive, setIsActive] = useState(false);
  // Cuando se haga click en el botón de editar perfil se habilita el modal
  const handleClick = () => {
    setIsActive(true);
  };
  // Cuando se presiona el botón X se cierra el modal
  const closeModal = () => {
    setIsActive(false);
  };
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>Historial Contractual y Laboral</h3>
        <table className="contracts-table">
          <thead>
            <tr>
              <th>Historial Laboral</th>
              <th>Contrato</th>
            </tr>
          </thead>
          <tbody>
            {historial.map((info) => (
              <>
                <tr key={info.cargo}>
                  <td>
                    <ul>
                      <li>Cargo: {info.cargo}</li>
                      <li>Empresa: {info.empresa}</li>
                      <li>Sector: {info.sector}</li>
                      <li>Funciones: {info.funciones}</li>
                      <li>Contacto:{info.contacto}</li>
                      <li>Teléfono: {info.telefono}</li>
                      <li>Fecha Inicio: {info.inicio}</li>
                      <li>Fecha Final: {info.final}</li>
                    </ul>
                  </td>
                  <td>
                    <ul style={{ display: "flex" }}>
                      <img src={contract} alt="" />
                      <img
                        src={edit}
                        alt=""
                        id="modalBtn"
                        onClick={handleClick}
                      />
                    </ul>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 style={{ textAlign: "center" }}>Estudios realizados</h3>
        <table className="contracts-table">
          <thead>
            <tr>
              <th>Estudios</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {estudios.map((estudio) => (
              <>
                <tr key={estudio.diploma}>
                  <td>
                    <ul>
                      <li>Estudio: {estudio.diploma}</li>
                      <li>Año: {estudio.year}</li>
                      <li>Institución: {estudio.inst}</li>
                    </ul>
                  </td>
                  <td>
                    <ul style={{ textAlign: "center" }}>
                      <img
                        src={edit}
                        alt=""
                        id="modalBtn"
                        onClick={handleClick}
                      />
                    </ul>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {isActive ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            {/*<span className="close">&times;</span>*/}
            <form action="" className="personal-info">
              <div>
                <label htmlFor="">Cargo:</label>
                <input required type="text" />
                <label htmlFor="">Empresa:</label>
                <input required type="text" />
                <label htmlFor="">Sector:</label>
                <input required type="text" />
                <label htmlFor="">Funciones:</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <label htmlFor="">Contacto:</label>
                <input required type="text" />
                <label htmlFor="">Teléfono:</label>
                <input required type="text" />
                <label style={{ width: "100%" }} htmlFor="">
                  Fecha de Inicio:
                </label>
                <input style={{ width: "100%" }} required type="date" /> <br />
                <label style={{ width: "100%" }} htmlFor="">
                  Fecha de Finalización:
                </label>
                <input required type="date" /> <br />
              </div>
              <input type="submit" value="Confirmar" />
            </form>
            <span
              style={{ textAlign: "center" }}
              className="close"
              onClick={closeModal}
              id="closeBtn"
            >
              &times;
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

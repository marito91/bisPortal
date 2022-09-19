import React, { useState } from "react";

export default function Accordion({
  nombre,
  fecha,
  sexo,
  parentesco,
  telefono,
  direccion,
  ciudad,
  ocupacion,
  estudios,
}) {
  // Se utiliza este estado para determinar el miembro activado para ver info.
  const [activeMember, setActiveMember] = useState(false);
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
      <div className="member-container">
        <div className="parent">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className=""
            onClick={() => setActiveMember(!activeMember)}
          >
            <div>{parentesco}</div>
            <div>{activeMember ? "-" : "+"}</div>
          </div>
        </div>
      </div>
      {activeMember && (
        <div className="member">
          <div id="member">
            <label className="">Nombre:</label>
            <label value={nombre}>{nombre}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div id="member">
            <label className="">Fecha de Nacimiento:</label>
            <label key={fecha} value={fecha}>
              {fecha}
            </label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div id="member">
            <label className="">Sexo:</label>
            <label key={sexo} value={sexo}>
              {sexo}
            </label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div id="member">
            <label className="">Parentesco:</label>
            <label key={parentesco} value={parentesco}>
              {parentesco}
            </label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div id="member">
            <label className="">Teléfono:</label>
            <label key={telefono} value={telefono}>
              {telefono}
            </label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div id="member">
            <label className="">Dirección:</label>
            <label key={direccion} value={direccion}>
              {direccion}
            </label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div id="member">
            <label className="">Ciudad:</label>
            <label key={ciudad} value={ciudad}>
              {ciudad}
            </label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div id="member">
            <label className="">Ocupación:</label>
            <label key={ocupacion} value={ocupacion}>
              {ocupacion}
            </label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div id="member">
            <label className="">Nivel de estudios:</label>
            <label key={estudios} value={estudios}>
              {estudios}
            </label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div style={{ textAlign: "center" }}>
            <button className="btn" id="modalBtn" onClick={handleClick}>
              Editar
            </button>
          </div>
        </div>
      )}
      {isActive ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            {/*<span className="close">&times;</span>*/}
            <form action="" className="personal-info">
              <div>
                <label htmlFor="">Nombre completo:</label>
                <input required type="text" />
                <label style={{ width: "100%" }} htmlFor="">
                  Fecha de Nacimiento:
                </label>
                <input required type="date" />
                <br />
                <label htmlFor="">Sexo:</label>
                <select required name="sexo" id="sexo">
                  <option value="-">-----</option>
                  <option value="m">Masculino</option>
                  <option value="f">Femenino</option>
                  <option value="n">No binario</option>
                </select>
                <label htmlFor="">Parentesco:</label>
                <select required name="parentesco" id="sexo">
                  <option value="-">-----</option>
                  <option value="padre">Padre</option>
                  <option value="madre">Madre</option>
                  <option value="hermano">Herman@</option>
                  <option value="hijo">Hij@</option>
                </select>
                <label htmlFor="">Teléfono:</label>
                <input required type="text" />
                <label htmlFor="">Dirección:</label>
                <input required type="text" />
                <label htmlFor="">Ciudad:</label>
                <input required type="text" />
                <label htmlFor="">Ocupación:</label>
                <select required name="Ocupacion" id="sexo">
                  <option value="-">-----</option>
                  <option value="desempleado">Desempleado</option>
                  <option value="empleado">Empleado</option>
                  <option value="independiente">Independiente</option>
                  <option value="pensionado">Pensionado</option>
                </select>
                <label htmlFor="">Estudios:</label>
                <select required name="estudios" id="sexo">
                  <option value="-">-----</option>
                  <option value="bachiller">Bachiller</option>
                  <option value="tecnico">Técnico o Tecnológico</option>
                  <option value="universitario">Universitario</option>
                  <option value="posgrado">Posgrado</option>
                  <option value="maestria">Maestria</option>
                </select>
              </div>
              <input type="submit" value="Agregar" />
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

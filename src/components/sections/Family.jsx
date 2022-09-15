import React, { useState } from "react";
import Accordion from "./Accordion";

// CSS
import "../../styles/Profile.css";

export default function Family() {
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
  // No se aplica el close cuando se presiona por fuera de la ventana para que los que estén en móvil no la cierren sin querer

  /*window.onload = function () {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("modalBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("closeBtn");

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  };*/

  const familyMembers = [
    {
      nombre: "Erika Raquel Vargas Moreno",
      fecha: "XX/XX/XXXX",
      sexo: "Femenino",
      parentesco: "Madre",
      teléfono: "3123456789",
      dirección: "Cra. 1 # 2 - 3",
      ciudad: "Barranquilla",
      ocupación: "Emplead@",
      estudios: "Bachiller",
    },
    {
      nombre: "Agustín Gómez De La Espriella",
      fecha: "XX/XX/XXXX",
      sexo: "Masculino",
      parentesco: "Padre",
      teléfono: "3123456789",
      dirección: "Cra. 1 # 2 - 3",
      ciudad: "Barranquilla",
      ocupación: "Independiente",
      estudios: "Universitario",
    },
  ];

  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>Información Familiar</h3>
        <div className="family-container">
          {familyMembers.map((member) => (
            <>
              <div className="member">
                <div id="member">
                  <label key={member.nombre} value={member.nombre} className="">
                    Nombre:
                  </label>
                  <label key={member.nombre} value={member.nombre}>
                    {member.nombre}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />
                <div id="member">
                  <label key={member.fecha} value={member.fecha} className="">
                    Fecha de Nacimiento:
                  </label>
                  <label key={member.fecha} value={member.fecha}>
                    {member.fecha}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />
                <div id="member">
                  <label key={member.sexo} value={member.sexo} className="">
                    Sexo:
                  </label>
                  <label key={member.sexo} value={member.sexo}>
                    {member.sexo}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />

                <div id="member">
                  <label
                    key={member.parentesco}
                    value={member.parentesco}
                    className=""
                  >
                    Parentesco:
                  </label>
                  <label key={member.parentesco} value={member.parentesco}>
                    {member.parentesco}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />
                <div id="member">
                  <label
                    key={member.teléfono}
                    value={member.teléfono}
                    className=""
                  >
                    Teléfono:
                  </label>
                  <label key={member.teléfono} value={member.teléfono}>
                    {member.teléfono}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />
                <div id="member">
                  <label
                    key={member.dirección}
                    value={member.dirección}
                    className=""
                  >
                    Dirección:
                  </label>
                  <label key={member.dirección} value={member.dirección}>
                    {member.dirección}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />
                <div id="member">
                  <label key={member.ciudad} value={member.ciudad} className="">
                    Ciudad:
                  </label>
                  <label key={member.ciudad} value={member.ciudad}>
                    {member.ciudad}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />
                <div id="member">
                  <label
                    key={member.ocupación}
                    value={member.ocupación}
                    className=""
                  >
                    Ocupación:
                  </label>
                  <label key={member.ocupación} value={member.ocupación}>
                    {member.ocupación}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />
                <div id="member">
                  <label
                    key={member.estudios}
                    value={member.estudios}
                    className=""
                  >
                    Nivel de estudios:
                  </label>
                  <label key={member.estudios} value={member.estudios}>
                    {member.estudios}
                  </label>
                </div>
                <hr style={{ color: "#161840" }} />
              </div>
            </>
          ))}

          {/*<div
            id="member-badge"
            className="member"
            onClick={() => setActiveMember(!activeMember)}
          >
            <div>{familyMembers.parentesco}</div>
            <div>{activeMember ? "-" : "+"}</div>
          </div>
          {familyMembers.map(
            ({
              parentesco,
              nombre,
              fecha,
              sexo,
              teléfono,
              dirección,
              ciudad,
              ocupación,
              estudios,
            }) => (
              <Accordion
                parentesco={parentesco}
                nombre={nombre}
                fecha={fecha}
                sexo={sexo}
                teléfono={teléfono}
                dirección={dirección}
                ciudad={ciudad}
                ocupación={ocupación}
                estudios={estudios}
              />
            )
          )}
          {/*activeMember && (
            <div className="member">
              {dataInfo.map((info) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      flex: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <label key={info[0]} value={info[0]} className="">
                      {info[0]}:
                    </label>
                    <label key={info[1]} value={info[1]}>
                      {info[1]}
                    </label>
                  </div>
                  <hr style={{ color: "#161840" }} />
                </>
              ))}
            </div>
                  )*/}
        </div>
      </div>
    </>
  );
}

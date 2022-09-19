import React, { useState } from "react";

// CSS
import "../../styles/Profile.css";

export default function Personal() {
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

  const dataLabels = [
    "Nombres",
    "Apellidos",
    "Perfil",
    "Documento de Identidad",
    "Fecha de Expedición",
    "Ciudad de Expedición",
    "Fecha de Nacimiento",
    "Lugar de Nacimiento",
    "Sexo",
    "Libreta Militar",
    "Teléfono",
    "Correo Personal",
    "Estado Civil",
    "Dirección",
    "Barrio",
  ];
  const userData = [
    "Mario Andres",
    "Gómez Vargas",
    "Administrador",
    "123456789",
    "XX/XX/XXXX",
    "Puerto Colombia",
    "18/10/1991",
    "Barranquilla",
    "Masculino",
    "Si",
    "3017823403",
    "magv181091@gmail.com",
    "Soltero",
    "Cra. 1 # 2 - 3",
    "Prado",
  ];

  const zip = (a1, a2) => a1.map((x, i) => [x, a2[i]]);
  const dataInfo = zip(dataLabels, userData);
  //console.log(dataInfo);
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>Tus datos</h3>
        <div className="content">
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

          <div style={{ textAlign: "center", marginTop: "4%" }}>
            <button className="btn" id="modalBtn" onClick={handleClick}>
              Editar
            </button>
            {isActive ? (
              <div id="myModal" className="modal">
                <div className="modal-content">
                  {/*<span className="close">&times;</span>*/}
                  <form action="" className="personal-info">
                    <div>
                      <label htmlFor="">Nombres:</label>
                      <input required type="text" />
                      <label htmlFor="">Apellidos:</label>
                      <input required type="text" />
                      <label htmlFor="">Documento de Identidad:</label>
                      <input required type="text" />
                      <label style={{ width: "100%" }} htmlFor="">
                        Fecha de Expedición:
                      </label>
                      <input style={{ width: "100%" }} required type="date" />{" "}
                      <br />
                      <label htmlFor="">Ciudad de Expedición:</label>
                      <input required type="text" />
                      <label style={{ width: "100%" }} htmlFor="">
                        Fecha de Nacimiento:
                      </label>
                      <input required type="date" /> <br />
                      <label htmlFor="">Lugar de Nacimiento:</label>
                      <input required type="text" />
                      <label htmlFor="">Sexo:</label>
                      <select required name="sexo" id="sexo">
                        <option value="-">-----</option>
                        <option value="m">Masculino</option>
                        <option value="f">Femenino</option>
                        <option value="n">No binario</option>
                      </select>
                      <label htmlFor="">Libreta Militar:</label>
                      <select required name="libreta" id="lm">
                        <option value="-">----</option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                        <option value="na">N/A</option>
                      </select>
                      <label htmlFor="">Teléfono:</label>
                      <input required type="text" />
                      <label htmlFor="">Correo Personal:</label>
                      <input required type="text" />
                      <label htmlFor="">Estado Civil:</label>
                      <select required name="estado" id="ec">
                        <option value="-">----</option>
                        <option value="soltero">Soltero(a)</option>
                        <option value="casado">Casado(a)</option>
                        <option value="divorciado">Divorciado(a)</option>
                        <option value="viudo">Viudo(a)</option>
                        <option value="ul">Unión Libre</option>
                      </select>
                      <label htmlFor="">Dirección:</label>
                      <input required type="text" />
                      <label htmlFor="">Barrio:</label>
                      <input required type="text" />
                    </div>
                    <input type="submit" value="Confirmar" />
                  </form>
                  <span className="close" onClick={closeModal} id="closeBtn">
                    &times;
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <p>*Algunos datos no pueden ser editados.</p>
        </div>
      </div>
    </>
  );
}

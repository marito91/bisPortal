import React, { useState } from "react";
import datos from "../../data/datosSD";

export default function Sociodemo() {
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

  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>Datos Sociodemográficos</h3>
        <div className="content">
          <div>
            <label className="">Cabeza de familia:</label>
            <label>{datos.head}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Número de personas a cargo:</label>
            <label>{datos.people}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Tipo de vivienda:</label>
            <label>{datos.house}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Actividades de ocio o Hobby:</label>
            <label>{datos.hobby}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Participado en actividades de bienestar:</label>
            <label>{datos.activity}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Enfermedad diagnosticada:</label>
            <label>{datos.disease}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Fuma:</label>
            <label>{datos.smoke}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Consume bebidas alcohólicas:</label>
            <label>{datos.alcohol}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Practica deporte:</label>
            <label>{datos.sport}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Frecuencia con que practica:</label>
            <label>{datos.frequency}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Contacto de Emergencia:</label>
            <label>{datos.emergency}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Teléfono:</label>
            <label>{datos.telefono}</label>
          </div>
          <hr style={{ color: "#161840" }} />
          <div>
            <label className="">Parentesco:</label>
            <label>{datos.relation}</label>
          </div>
          <hr style={{ color: "#161840" }} />

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
                      <label htmlFor="">Cabeza de Familia:</label>
                      <select required name="head" id="head">
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                      </select>
                      <label htmlFor="">Número de personas a cargo:</label>
                      <select required name="people" id="people">
                        <option value="none">Ninguna</option>
                        <option value="some">1 - 3 Personas</option>
                        <option value="many">4 - 6 Personas</option>
                        <option value="lots">Más de 6 personas</option>
                      </select>
                      <label htmlFor="">Tipo de vivienda:</label>
                      <select required name="house" id="house">
                        <option value="rent">Arrendada</option>
                        <option value="own">Propia</option>
                        <option value="family">Familiar</option>
                        <option value="shared">Compartida</option>
                      </select>
                      <label htmlFor="">Uso del tiempo libre o Hobby:</label>
                      <select required name="hobby" id="hobby">
                        <option value="job">Otro trabajo</option>
                        <option value="labour">Labores domésticas</option>
                        <option value="sports">Recreación y deporte</option>
                        <option value="studies">Estudio</option>
                        <option value="other">Otro</option>
                      </select>
                      <label htmlFor="">
                        ¿Ha participado en actividades de Bienestar realizadas
                        por la entidad?
                      </label>
                      <select required name="activities" id="activities">
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                      </select>
                      <label htmlFor="">
                        ¿Ha sido diagnosticad@ alguna enfermedad en los
                        siguientes sistemas?
                      </label>
                      <select required name="disease" id="disease">
                        <option value="no">No</option>
                        <option value="nervous">Nervioso</option>
                        <option value="bones">Osteomuscular</option>
                        <option value="heart">Cardiaco</option>
                        <option value="blood">Sanguineo</option>
                      </select>
                      <label htmlFor="">¿Fuma?</label>
                      <select required name="smoke" id="smoke">
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                      </select>
                      <label htmlFor="">¿Consume bebidas alcohólicas?:</label>
                      <select required name="alcohol" id="alcohol">
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                      </select>
                      <label htmlFor="">¿Practica algún deporte?</label>
                      <select required name="sport" id="sport">
                        <option value="no">No</option>
                        <option value="si">Sí</option>
                      </select>
                      <label htmlFor="">
                        ¿Con qué frecuencia practica el deporte?
                      </label>
                      <select required name="frequency" id="frequency">
                        <option value="daily">Diario</option>
                        <option value="weekly">Semanalmente</option>
                        <option value="ocasionally">Ocasionalmente</option>
                      </select>

                      <label htmlFor="">Contacto de Emergencia:</label>
                      <input required type="text" />
                      <label htmlFor="">Teléfono:</label>
                      <input required type="text" />
                      <label htmlFor="">Parentesco:</label>
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

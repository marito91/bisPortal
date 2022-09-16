import React, { useState, useEffect } from "react";

// CSS
import "../../styles/Profile.css";

// Components
import Accordion from "./family/Accordion";

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
  const familyMembers = [
    {
      nombre: "Erika Raquel Vargas Moreno",
      fecha: "XX/XX/XXXX",
      sexo: "Femenino",
      parentesco: "Madre",
      telefono: "3123456789",
      direccion: "Cra. 1 # 2 - 3",
      ciudad: "Barranquilla",
      ocupacion: "Emplead@",
      estudios: "Bachiller",
    },
    {
      nombre: "Agustín Gómez De La Espriella",
      fecha: "XX/XX/XXXX",
      sexo: "Masculino",
      parentesco: "Padre",
      telefono: "3123456789",
      direccion: "Cra. 1 # 2 - 3",
      ciudad: "Barranquilla",
      ocupacion: "Independiente",
      estudios: "Universitario",
    },
    {
      nombre: "Laura Andrea Gómez Vargas",
      fecha: "XX/XX/XXXX",
      sexo: "Femenino",
      parentesco: "Herman@",
      telefono: "3123456789",
      direccion: "Cra. 1 # 2 - 3",
      ciudad: "Barranquilla",
      ocupacion: "Emplead@",
      estudios: "Bachiller",
    },
  ];

  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>Información Familiar</h3>
        {familyMembers.length === 0 ? (
          <>
            <h4 style={{ textAlign: "center" }}>
              No hay información familiar disponible. Agrega un nuevo familiar.
            </h4>
            <button className="btn" id="modalBtn" onClick={handleClick}>
              Agregar
            </button>
          </>
        ) : (
          familyMembers.map(
            ({
              nombre,
              fecha,
              sexo,
              parentesco,
              telefono,
              direccion,
              ciudad,
              ocupacion,
              estudios,
            }) => (
              <Accordion
                nombre={nombre}
                fecha={fecha}
                sexo={sexo}
                parentesco={parentesco}
                telefono={telefono}
                direccion={direccion}
                ciudad={ciudad}
                ocupacion={ocupacion}
                estudios={estudios}
              />
            )
          )
        )}
        <div style={{ textAlign: "center", marginTop: "4%" }}>
          <button className="btn" id="modalBtn" onClick={handleClick}>
            Agregar
          </button>
          {isActive ? (
            <div id="myModal" className="modal">
              <div className="modal-content">
                {/*<span className="close">&times;</span>*/}
                <form action="" className="personal-info">
                  <div>
                    <label htmlFor="">Nombre completo:</label>
                    <input required type="text" />
                    <label htmlFor="">Fecha de Nacimiento:</label>
                    <input required type="date" />
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
                <span className="close" onClick={closeModal} id="closeBtn">
                  &times;
                </span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

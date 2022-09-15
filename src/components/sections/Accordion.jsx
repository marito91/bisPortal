import React, { useState } from "react";

export default function Accordion({
  parentesco,
  nombre,
  fecha,
  sexo,
  teléfono,
  dirección,
  ciudad,
  ocupación,
  estudios,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="member" onClick={() => setIsActive(!isActive)}>
        <div>{parentesco}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {
            (nombre,
            fecha,
            sexo,
            teléfono,
            dirección,
            ciudad,
            ocupación,
            estudios)
          }
        </div>
      )}
    </div>
  );
}

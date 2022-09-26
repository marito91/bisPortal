import React from "react";

export default function Admin() {
  return (
    <div className="kc">
      <h3>Administración</h3>
      <h4 style={{ textAlign: "center" }}>Crear Solicitud</h4>
      <form action="">
        <label htmlFor="">Nombre Completo</label>
        <input type="text" />
        <label htmlFor="">Sección</label>
        <select name="" id="">
          <option value="">Administración</option>
          <option value="">Early Years</option>
          <option value="">Primaria</option>
          <option value="">Secundaria</option>
          <option value="">Administración</option>
        </select>
        <label htmlFor="">Área</label>
        <select name="" id="">
          <option value="">Admisiones</option>
          <option value="">Cafetería</option>
          <option value="">RRHH</option>
          <option value="">Calidad</option>
          <option value="">Cartera</option>
          <option value="">Compras</option>
          <option value="">Contabilidad</option>
          <option value="">Knowledge Centre & TICs</option>
          <option value="">Marathon Gym</option>
          <option value="">Recepción</option>
          <option value="">Rectoría</option>
          <option value="">Relaciones Públicas</option>
          <option value="">Sala de Juntas</option>
        </select>
        <label htmlFor="">Descripción</label>
        <textarea name="" id="" cols="30" rows="7"></textarea>
        <div>
          <input type="submit" name="" id="" value="Enviar" />
        </div>
      </form>
    </div>
  );
}

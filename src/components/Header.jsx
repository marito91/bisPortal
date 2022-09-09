// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Media
import bislogo from "../assets/img/logoletters.png";

// CSS
import "../styles/Home.css";

// Components

export default function Header(props) {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <>
      {loggedIn ? (
        <section class="top-nav">
          <div>
            <Link to="/home">
              <img src={bislogo} style={{ width: "72", height: "60" }} alt="" />
            </Link>
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label class="menu-button-container" for="menu-toggle">
            <div class="menu-button"></div>
          </label>
          <ul class="menu">
            <li>
              <Link to="/edit_profile" className="header-links">
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/home" className="header-links">
                Solicitudes
              </Link>
            </li>
            <li>
              <Link to="/home" className="header-links">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/home" className="header-links">
                Pagos
              </Link>
            </li>
            <li>
              <Link to="/home" className="header-links">
                Noticias
              </Link>
            </li>
            <li>
              <Link to="/" className="header-links">
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </section>
      ) : (
        <section class="top-nav">
          <div>
            <Link to="/home">
              <img src={bislogo} style={{ width: "72", height: "60" }} alt="" />
            </Link>
          </div>
          <ul class="menu">
            <li className="header-links" id="title">
              Portal de Funcionarios
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

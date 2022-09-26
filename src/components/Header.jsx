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

  function closeMenu() {
    document.getElementsByClassName("menu").style.display = "none";
  }

  var localHost = "localhost:3000";

  return (
    <>
      {loggedIn ? (
        <section className="top-nav">
          <div>
            <Link to="/home">
              <img
                src={bislogo}
                style={{ width: "70%", height: "48" }}
                alt=""
              />
            </Link>
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link
                to="/edit_profile"
                className="header-links"
                onClick={() => closeMenu()}
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/requests"
                className="header-links"
                onClick={() => closeMenu()}
              >
                Solicitudes
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="header-links"
                onClick={() => closeMenu()}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/payments"
                className="header-links"
                onClick={() => closeMenu()}
              >
                Pagos
              </Link>
            </li>
            <li>
              <Link to="/" className="header-links" onClick={() => closeMenu()}>
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
          <ul className="menu">
            <li className="header-links" id="title">
              Portal de Funcionarios
            </li>
          </ul>
        </section>
      )}
    </>
  );
}

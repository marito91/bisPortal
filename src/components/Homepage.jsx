import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

// Media
import campus1 from "../assets/img/1.png";
import campus2 from "../assets/img/2.png";
import campus3 from "../assets/img/3.png";
import money from "../assets/icons/money.png";
import permission from "../assets/icons/permission.png";
import tablet from "../assets/icons/tablet.png";

export default function Homepage() {
  return (
    <>
      <div style={{ color: "#161840" }}>
        <div className="title-page">
          <div>&nbsp;</div>
          <div id="title-div">
            <h1>Funcionarios</h1>
          </div>
          <div>&nbsp;</div>
        </div>
        <h1 style={{ textAlign: "center", marginTop: "5%" }}>
          Bienvenid@, Mario
        </h1>
        <div className="row">
          <div className="left-profile">
            <h3 style={{ textAlign: "center" }}>Tu cuenta</h3>
            <div>
              <label htmlFor="">Nombre:</label>&nbsp;&nbsp;&nbsp;
              <label htmlFor="">Mario Andres Gomez Vargas</label>
            </div>
            <hr />
            <div>
              <label htmlFor="">Documento de Identidad:</label>
              &nbsp;&nbsp;&nbsp;
              <label htmlFor="">1044427366</label>
            </div>
            <hr />
            <div>
              <label htmlFor="">Fecha de Nacimiento:</label>&nbsp;&nbsp;&nbsp;
              <label htmlFor="">18/10/1991</label>
            </div>
            <hr />
            <div>
              <label htmlFor="">Correo:</label>&nbsp;&nbsp;&nbsp;
              <label htmlFor="">mariogomez@britishschool.edu.co</label>
            </div>
            <hr />
            <div>
              <label htmlFor="">Dirección:</label>&nbsp;&nbsp;&nbsp;
              <label htmlFor="">Cra. 55 # 75 - 119</label>
            </div>
            <hr />
            <div>
              <label htmlFor="">Teléfono:</label>&nbsp;&nbsp;&nbsp;
              <label htmlFor="">3017823403</label>
            </div>
            <hr />
            <div style={{ textAlign: "center", marginTop: "4%" }}>
              <Link to="/edit_profile" style={{ textDecoration: "none" }}>
                <button className="btn">Editar perfil</button>
              </Link>
            </div>
          </div>
          <div className="right-profile">
            <h3 style={{ textAlign: "center" }}>Tus movimientos</h3>
            <div className="container">
              {/* Esta parte a continuación se debe hacer en un map para que se desplieguen los movimientos en grupos. MAX 3.  */}
              <div className="movement">
                <img src={money} alt="" />
                <div>
                  <p>
                    Pago de nómina: <br /> $0.000.000
                  </p>
                </div>
              </div>
              <div className="movement">
                <img src={permission} alt="" />
                <div>
                  <p>
                    Solicitud de Permiso: <br /> Aprobada
                  </p>
                </div>
              </div>
              <div className="movement">
                <img src={tablet} alt="" />
                <div>
                  <p>
                    Préstamos: <br /> 4:00pm 16/09/2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news">
        <h3 style={{ textAlign: "center" }}>Noticias</h3>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={campus1} alt="First slide" />
            <Carousel.Caption className="carousel-content">
              <h1>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={campus2} alt="Second slide" />
            <Carousel.Caption className="carousel-content">
              <h1>Second slide label</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={campus3} alt="Third slide" />
            <Carousel.Caption className="carousel-content">
              <h1>Third slide label</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

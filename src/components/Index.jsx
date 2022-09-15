import React from "react";

// Media
//import campus1 from "../assets/img/campus1.png";
import campus2 from "../assets/img/campus2.png";
/*import campus3 from "../assets/img/campus3.png";
import campus4 from "../assets/img/campus4.png";
import campus5 from "../assets/img/campus5.png";*/
import logo from "../assets/img/logolarge.png";

// CSS
import "../styles/Home.css";

export default function Index() {
  return (
    <>
      <div className="login-page" style={{ position: "relative" }}>
        <img src={campus2} alt="" />
        <div className="login-form">
          <img id="logo" src={logo} alt="" />
          <form action="">
            <label htmlFor="">Usuario</label>
            <input type="text" />
            <label htmlFor="">Contraseña</label>
            <input type="password" />
            <input type="submit" value="Ingresar" />
            <input id="google" type="submit" value="Sign in with Google" />
          </form>
        </div>
        <img id="hidden-background" src={campus2} alt="" />
      </div>
    </>
  );
}

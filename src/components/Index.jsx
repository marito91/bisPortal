import React from "react";

// Media
/*import campus1 from "../assets/img/campus1.png";
import campus2 from "../assets/img/campus2.png";
import campus3 from "../assets/img/campus3.png";
import campus4 from "../assets/img/campus4.png";
import campus5 from "../assets/img/campus5.png";*/
import logo from "../assets/img/logoletters.png";

// CSS
import "../styles/Home.css";

export default function Index() {
  return (
    <div className="main">
      <div className="column">
        {" "}
        <img src={logo} style={{ width: "72", height: "60" }} alt="" />
      </div>
      <div className="column">
        <form action="" className="login-form2">
          <input type="text" placeholder="Username" />
          <br />
          <input type="password" placeholder="Password" />
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
        </form>
      </div>
    </div>
  );
}

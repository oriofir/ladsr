import React from "react";
import {Link} from "react-router-dom"
import ModularVid from "../assets/ModularVid.mp4"
import logo from "../assets/LADSR_LOGO_ROC_HORZ_YELLOW.png";

const Landing = () => {
  return (
  <div className="main">
    <div className="overlay"></div>
    <video src={ModularVid} autoPlay loop muted />
    <img src={logo} className="logoImage" alt="logo" />
    <div className="content">
      <Link to="/home">
      <button className="welcomeButton">WELCOME</button>
      </Link>
    </div>
  </div>
  )
}

export default Landing
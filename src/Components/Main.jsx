import React from "react";
import ModularVid from "../assets/ModularVid.mp4"
import logo from "../assets/LADSR_LOGO_ROC_HORZ_YELLOW.png";

const Main = () => {
  return (
  <div className="main">
    <div className="overlay"></div>
    <video src={ModularVid} autoPlay loop muted />
    <img src={logo} className="logoImage" alt="logo" />
    <div className="content">
      <button className="welcomeButton">WELCOME</button>
      
    </div>
  </div>
  )
}

export default Main
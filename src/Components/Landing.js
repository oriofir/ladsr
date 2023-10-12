import React from "react";
import { Link } from "react-router-dom";
import ModularVid from "../assets/ModularVid.mp4";

import logo from "../assets/LADSR_LOGO_ROC_HORZ_YELLOW.png";

const Landing = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={ModularVid} className="synthVid" autoPlay loop muted></video>
      <img src={logo} className="logoImage" alt="logo" />

      <Link to="/home" className="button-class">
        <button className="welcomeButton">WELCOME</button>
      </Link>
    </div>
  );
};

export default Landing;

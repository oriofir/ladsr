import React from "react";
import { Link } from "react-router-dom";
import ModularVid from "../assets/ModularVid.mp4";

import logo from "../assets/LADSR_LOGO_ROC_HORZ_YELLOW.png";

const Landing = () => {
  return (
    <>
      <div className="overlay"></div>
      <video src={ModularVid} className="synthVid" autoPlay loop muted></video>
      <div className="main">
        <img src={logo} className="logoImage" alt="logo" />
        <div className="buttonContainer">
          <Link to="/home" className="button-class">
            <button className="welcomeButton">WELCOME</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;

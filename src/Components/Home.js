import React from "react";
import logo from "../assets/LADSR_LOGO_ROC_HORZ_YELLOW.png"
import Navigation from "./Navigation";

const Home = () => {
    return (
        <>
        <div className="homeContainer">
        <img src={logo} className="logoImageHome" alt="logo" />
        <Navigation />
        </div>
       
        </>
    )
}

export default Home
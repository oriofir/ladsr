import React from "react";
import ModularVid from "../assets/ModularVid.mp4"

const Main = () => {
  return (
  <div className="main">
    <video src={ModularVid} autoPlay loop muted />
    <div className="content">
      <h1>Welcome</h1>
    </div>
  </div>
  )
}

export default Main
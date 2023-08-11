import logo from "./LADSR_LOGO_ROC_HORZ_3.png";
// import LoopingVideo from "./Components/LoopingVideo";
import "./App.css";

function App() {
  return (
    <>
      {/* <LoopingVideo /> */}
      <div className="comingSoon">SITE COMING SOON...</div>
      <div className="outerContainer">
        <img src={logo} className="logoImage" alt="logo" />
        <a
          href="https://www.kickstarter.com/projects/1837758836/ladsr-synth-library-shop-and-educational-center"
          target="_blank"
          rel="noopener noreferrer"
          className="kickstarterButton"
        >
          KICKSTARTER
        </a>
      </div>
    </>
  );
}

export default App;

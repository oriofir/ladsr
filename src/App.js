import logo from "./assets/LADSR_LOGO_ROC_HORZ_YELLOW.png";
import Main from "./Components/Main.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="outerContainer">
        <img src={logo} className="logoImage" alt="logo" />

        <Main />
      </div>
    </>
  );
}

export default App;

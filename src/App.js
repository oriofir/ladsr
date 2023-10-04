import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing.js";
import Home from "./Components/Home.js";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Landing} />
          <Route exact path="/home" Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

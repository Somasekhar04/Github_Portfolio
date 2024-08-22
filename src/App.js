import React from "react";
import Home from "../src/Components/Home/Home";
import "./App.css";
import Skills from "./Components/Skills/Skills";
import WorkExp from "./Components/WorkExp/WorkExp";
import Education from "./Components/Education/Education";
import About from "./Components/About/About"

function App() {
  return (
    <div>
      <Home />
      <Skills />
      <WorkExp />
      <Education/>
      <About/>
    </div>
  );
}

export default App;

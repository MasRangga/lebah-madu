import React from "react";
import TanamanSantos from "./pages/TanamanSantos";
import TanamanKaliandra from "./pages/TanamanKaliandra";
import TanamanAmp from "./pages/TanamanAmp";
import TanamanKemuning from "./pages/TanamanKemuning";
import Feedback from "./components/feedback";
import "./output.css";

function App() {
  return (
    <div className="App">
      <TanamanSantos />
      <TanamanKaliandra />
      <TanamanAmp />
      <TanamanKemuning />
      <Feedback />
    </div>
  );
}

export default App;

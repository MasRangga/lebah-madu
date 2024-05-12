import React from "react";
import "./output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plant from "./pages/Plant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Plant />} />
      </Routes>
    </Router>
  );
}

export default App;

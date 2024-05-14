import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./output.css";
import HomePage from "./pages/HomePage";
import PlantPage from "./pages/PlantPage";
import AboutPage from "./pages/AboutPage";
import Plant from "./pages/Plant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plantpage" element={<PlantPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/" element={<Plant />} />
      </Routes>
    </Router>
  );
}

export default App;

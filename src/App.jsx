import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlantPage from "./pages/PlantPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plantpage" element={<PlantPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

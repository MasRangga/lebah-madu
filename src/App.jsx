import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./output.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Plant from "./pages/Plant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/plantpage" element={<Plant />} />
      </Routes>
    </Router>
  );
}

export default App;

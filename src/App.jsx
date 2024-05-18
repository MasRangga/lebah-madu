import React from "react";
import "./output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plant from "./pages/Plant";
import Santos from "./pages/details/SantosPage";
import Kopi from "./pages/details/KopiPage";
import TapakDara from "./pages/details/TapakDara";
import Langsat from "./pages/details/Langsat";
import ButtonBackToCard from "./components/ButtonBackToCard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlantPage from "./pages/PlantPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Card" element={<Plant />} />
        <Route path="santos" element={<Santos />} />
        <Route path="kopi" element={<Kopi />} />
        <Route path="TapakDara" element={<TapakDara />} />
        <Route path="/Langsat" element={<Langsat />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/plantpage" element={<PlantPage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

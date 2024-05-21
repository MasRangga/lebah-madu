import React from "react";
import "./output.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Plant from "./pages/Plant";
import Santos from "./pages/details/SantosPage";
import Kopi from "./pages/details/KopiPage";
import TapakDara from "./pages/details/TapakDara";
import Langsat from "./pages/details/Langsat";
import ButtonBackToCard from "./components/ButtonBackToCard";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Asoka from "./pages/details/Asoka";
import Calliandra from "./pages/details/Calliandra";
import Kemuning from "./pages/details/Kemuning";
import Mangga from "./pages/details/Mangga";
import AirMataPengantin from "./pages/details/AirMataPengantin";
import MahkotaDuri from "./pages/details/MahkotaDuri";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Card" element={<Plant />} />
        <Route path="santos" element={<Santos />} />
        <Route path="kopi" element={<Kopi />} />
        <Route path="TapakDara" element={<TapakDara />} />
        <Route path="/Langsat" element={<Langsat />} />
        <Route path="/asoka" element={<Asoka />} />
        <Route path="/calliandra" element={<Calliandra />} />
        <Route path="/kemuning" element={<Kemuning />} />
        <Route path="/mangga" element={<Mangga />} />
        <Route path="/airmatapengantin" element={<AirMataPengantin />} />
        <Route path="/mahkotaduri" element={<MahkotaDuri />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
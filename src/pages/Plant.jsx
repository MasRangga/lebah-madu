import React from "react";
import Navbar from "../components/Navbar";
import CopyRight2 from "../components/CopyRight2";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Plant = () => {
  return (
    <div className="bg-gray-100 ">
      <Navbar />
      <div className="card-plant flex justify-center">
        <div className="card card-compact w-96  shadow-xl">
          <figure>
            <img src="src/assets/images/kopirobusta.jpg" alt="Kopi Robusta" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kopi Robusta</h2>
            <p>
              Tanaman kopi Robusta (Coffea canephora) adalah salah satu spesies
              kopi yang penting secara komersial...
            </p>
            <Link to="/kopi" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/tapakdara.jpg" alt="Tapak Dara" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Tapak Dara</h2>
            <p>
              Tanaman tapak dara (Catharanthus roseus) adalah tanaman hias yang
              juga memiliki nilai obat...
            </p>
            <Link to="/TapakDara" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/langsat.jpg" alt="langsat" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Langsat</h2>
            <p>
              Tanaman Santos biasanya merujuk pada tanaman dengan nama ilmiah
              Cordyline fruticosa...
            </p>
            <Link to="/Langsat" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/kemuning2.jpg" alt="kemuning" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kemuning</h2>
            <p>
              Kemuning (Murraya paniculata) adalah tanaman asli Asia Tenggara
              yang terkenal karena...
            </p>
            <Link to="/kemuning" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/asoka.jpg" alt="asoka" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Asoka</h2>
            <p>
              Bunga Asoka, yang dikenal dengan nama ilmiah Saraca indica, adalah
              salah satu tanaman hias yang...
            </p>
            <Link to="/asoka" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/mangga.jpg" alt="mangga" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mangga</h2>
            <p>
              Mangga (Mangifera indica) adalah tanaman buah tropis yang berasal
              dari wilayah Asia Selatan, khususnya...
            </p>
            <Link to="/mangga" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="src/assets/images/bunga-air-mata-pengantin.jpg"
              alt="amp"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Air Mata Pengantin</h2>
            <p>
              Air mata pengantin adalah tumbuhan memanjat (liana) anggota suku
              Polygonaceae yang berasal dari...
            </p>
            <Link to="/airmatapengantin" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/calliandra.jpg" alt="calliandra" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Calliandra</h2>
            <p>
              Calliandra adalah genus tanaman berbunga yang berasal dari daerah
              tropis dan subtropis di...
            </p>
            <Link to="/calliandra" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/santos2.jpg" alt="mangga" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Santos</h2>
            <p>
              Tanaman Santos biasanya merujuk pada tanaman dengan nama ilmiah
              Cordyline fruticosa...
            </p>
            <Link to="/santos" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/mahkotaduri.jpg" alt="Mahkota Duri" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mahkota Duri</h2>
            <p>Mahkota Duri atau Crown of Thorns (Euphorbia milii) adalah tanaman sukulen yang...</p>
            <Link to="/mahkotaduri" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/kayumanis.jpg" alt="Kayu Manis" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kayu Manis</h2>
            <p>
              Tanaman kayu manis (Cinnamomum verum atau Cinnamomum cassia)
              adalah pohon kecil yang berasal dari...
            </p>
            <Link to="/santos" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="src/assets/images/pasakbumi.jpg" alt="Pasak Bumi" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pasak Bumi</h2>
            <p>
              Tanaman Pasak Bumi (Eurycoma longifolia) adalah tumbuhan asli
              hutan tropis di Asia Tenggara, terutama...
            </p>
            <Link to="/santos" className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
      </div>
      <CopyRight2 />
    </div>
  );
};

export default Plant;

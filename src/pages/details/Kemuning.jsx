import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight2 from "../../components/CopyRight2";
import ButtonBackToCard from "../../components/ButtonBackToCard";

function Kemuning() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full rounded-lg"
                src="src/assets/images/kemuning2.jpg"
                alt="Kemuning Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Kemuning</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Kemuning (Murraya paniculata) adalah tanaman asli Asia Tenggara
                yang terkenal karena keindahan dan aroma harumnya. Tanaman ini
                populer di daerah tropis dan subtropis Asia, terutama di
                Indonesia, Malaysia, dan Thailand.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Kemuning: <br />
              1. <strong> Asal Usul : </strong> Tanaman ini berasal dari daerah
              tropis dan subtropis di Asia, termasuk Indonesia, Malaysia, dan
              Thailand. <br />
              2. <strong> Deskripsi Morfologi : </strong> Kemuning memiliki daun majemuk yang hijau mengkilap, dengan daun-daun kecil tersusun menyirip. Bunganya berwarna putih, kecil, dan sangat harum, sering kali digunakan dalam rangkaian bunga. Buahnya berwarna merah saat matang. <br />
              3. <strong> Manfaat dan Penggunaan:</strong> Kemuning sering ditanam sebagai tanaman hias di taman dan pekarangan, juga sering digunakan sebagai tanaman pagar hidup atau pembatas. Selain sebagai tanaman hias, kemuning memiliki nilai ekologi dengan menarik serangga yang bermanfaat dan menyediakan tempat berlindung bagi burung. <br />
              4. <strong> Karakteristik Pertumbuhan </strong> Tanaman ini tumbuh subur di daerah dengan sinar matahari yang cukup, meskipun dapat tumbuh baik di tempat yang teduh sebagian. Perawatannya relatif mudah, memerlukan penyiraman teratur dan pemupukan ringan secara berkala untuk mempromosikan pertumbuhan yang sehat. Kemuning tumbuh dengan cepat dan dapat mencapai ketinggian 3-6 meter dalam beberapa tahun, dengan pemangkasan yang sesekali diperlukan untuk menjaga bentuk dan pembungaan yang lebih baik. <br />
            </p>
          </div>
        </div>
      </div>
      <div className="pl-20">
        <ButtonBackToCard />
      </div>
      <CopyRight2 />
    </div>
  );
}

export default Kemuning;

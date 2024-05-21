import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight2 from "../../components/CopyRight2";
import ButtonBackToCard from "../../components/ButtonBackToCard";

function AirMataPengantin() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full rounded-lg"
                src="src\assets\images\bunga-air-mata-pengantin.jpg"
                alt="Air Mata Pengantin Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Air Mata Pengantin
              </h1>
              <p className="mt-4 text-gray-700 text-justify">
                Air mata pengantin adalah tumbuhan memanjat (liana) anggota suku
                Polygonaceae yang berasal dari Amerika Tengah. Bunga air mata
                pengantin disukai oleh kupu-kupu dan beberapa serangga lainnya.
                Tanaman ini kerap dibudidayakan sebagai tanaman hias di daerah
                tropis dan subtropis.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Air Mata Pengantin:{" "}
              <br />
              1. <strong> Asal Usul : </strong> Tanaman ini memiliki asal usul
              dari Meksiko dan Amerika Tengah, tetapi telah menyebar ke berbagai
              belahan dunia yang memiliki iklim tropis dan subtropis. <br />
              2. <strong> Deskripsi Morfologi : </strong> Air Mata Pengantin
              adalah tanaman merambat yang memiliki batang yang ramping dan
              lentur, mampu tumbuh mencapai 6-9 meter atau lebih panjangnya.
              Daunnya berbentuk hati atau bulat telur, berwarna hijau gelap, dan
              tersusun berselang-seling di sepanjang batang. Bunganya berbentuk
              seperti lonceng, kecil, dan tersusun dalam tandan panjang yang
              menggantung. Bunga-bunga ini biasanya berwarna merah muda atau
              putih dan sangat menarik bagi kupu-kupu dan lebah.
              <br />
              3. <strong> Manfaat dan Penggunaan:</strong> Tanaman Air Mata
              Pengantin sering digunakan sebagai tanaman hias pagar, penutup
              tanah, atau tanaman merambat untuk pagar, pergola, atau dinding.
              Bunga-bunganya yang berlimpah memberikan efek yang indah di
              taman-taman dan kebun-kebun, terutama di daerah dengan iklim
              hangat. Tanaman ini juga berfungsi sebagai pakan bagi beberapa
              jenis serangga, meningkatkan keanekaragaman hayati di lingkungan
              tersebut. <br />
              4. <strong> Karakteristik Pertumbuhan: </strong> Tanaman ini
              tumbuh subur di daerah dengan sinar matahari yang cukup, meskipun
              dapat tumbuh baik di tempat yang teduh sebagian. Perawatannya
              relatif mudah, memerlukan penyiraman teratur dan pemupukan ringan
              secara berkala. Air Mata Pengantin tumbuh dengan cepat dan dapat
              mencapai ketinggian 3-6 meter dalam beberapa tahun, dengan
              pemangkasan yang sesekali diperlukan untuk menjaga bentuk dan
              pembungaan yang lebih baik.
              <br />
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

export default AirMataPengantin;

import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight2 from "../../components/CopyRight2";
import ButtonBackToCard from "../../components/ButtonBackToCard";

function Asoka() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="">
              <img
                className="w-full rounded-lg"
                src="src/assets/images/asoka.jpg"
                alt="Asoka Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Asoka</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Bunga Asoka, yang dikenal dengan nama ilmiah Saraca indica,
                adalah salah satu tanaman hias yang populer di Indonesia. Bunga
                Asoka sering digunakan dalam berbagai upacara dan perayaan
                karena keindahan dan maknanya yang mendalam dalam budaya
                Indonesia.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Asoka: <br />
              1. <strong> Asal Usul : </strong> Asoka berasal dari daerah tropis
              di Asia Selatan dan Tenggara. Habitat asli asoka yaitu India,
              Nepal, Sri Lanka, dan Myanmar. Tanaman ini juga ditemukan di
              beberapa bagian Asia Tenggara, termasuk Thailand, Malaysia, dan
              Indonesia. <br />
              2. <strong> Deskripsi Morfologi : </strong> Daun tanaman Asoka
              berbentuk lonjong dan hijau mengkilap, dengan tekstur yang agak
              tebal. Batang pohon Asoka cukup kuat dan memiliki cabang yang
              banyak. Bunga Asoka memiliki kelopak berwarna merah muda hingga
              merah tua, dengan benang sari berwarna kuning. <br />
              3. <strong> Manfaat dan Penggunaan:</strong> Bunga Asoka digunakan
              sebagai tanaman hias karena keindahan bunganya, memiliki makna
              spiritual dalam upacara keagamaan Hindu dan Buddha, serta
              ekstraknya digunakan dalam pengobatan tradisional untuk mengurangi
              nyeri haid dan mengobati gangguan pencernaan. <br />
              4. <strong> Karakteristik Pertumbuhan </strong> Bunga Asoka adalah
              tanaman yang tumbuh relatif cepat, terutama dalam kondisi optimal.
              Tanaman ini dapat mencapai ketinggian 6-9 meter dalam beberapa
              tahun. Bunga Asoka menyukai lingkungan tropis dengan tanah subur
              dan sinar matahari yang cukup, meskipun juga dapat tumbuh di
              tempat yang teduh. Tanaman ini memerlukan penyiraman teratur,
              terutama pada musim kemarau, serta pemupukan berkala untuk menjaga
              kesehatan dan keindahan bunganya. Pemangkasan juga penting untuk
              merangsang pertumbuhan bunga yang lebih lebat dan menjaga bentuk
              tanaman. <br />
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

export default Asoka;

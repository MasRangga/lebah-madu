import React from "react";
import Navbar from "/src/components/Navbar";
import CopyRight2 from "/src/components/CopyRight2";
import ButtonBackToCard from "/src/components/ButtonBackToCard";

const Langsat = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-80 h-60 rounded-lg"
                src="src/assets/images/langsat2.jpg"
                alt="Santos Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Langsat</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Tanaman langsat (Lansium domesticum) adalah pohon buah tropis
                yang berasal dari Asia Tenggara dan sangat dihargai karena
                buahnya yang lezat. Pohon langsat memiliki daun hijau yang lebat
                dan berkilau serta menghasilkan buah bundar kecil berkulit tipis
                berwarna kuning atau merah saat matang, dengan daging buah yang
                manis dan segar
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Langsat: <br />
              1. <strong> Asal Usul : </strong> Tanaman langsat berasal dari
              daerah tropis Asia Tenggara, terutama Indonesia, Malaysia,
              Thailand, dan Filipina.
              <br />
              2. <strong> Deskripsi Morfologi : </strong> Langsat adalah pohon
              kecil yang tumbuh subur di daerah tropis. Daunnya bersifat hijau
              mengkilap dan berbentuk elips, biasanya tumbuh berkelompok di
              ujung ranting. Buahnya bulat atau oval dengan kulit tipis berwarna
              kuning atau merah saat matang, dan daging buahnya berwarna putih,
              manis, dan segar. Setiap buah biasanya berisi beberapa biji yang
              besar. <br />
              3. <strong> Kegunaan dan Konsumsi:</strong> Buah langsat sangat
              populer sebagai buah konsumsi langsung di berbagai negara Asia
              Tenggara. Mereka memiliki rasa yang manis dan menyegarkan serta
              sering dimakan segar atau dijadikan bahan dalam minuman, salad,
              atau hidangan penutup. <br />
              4. <strong> Nilai Budaya: </strong> Memiliki nilai budaya yang
              tinggi di beberapa negara Asia Tenggara, sering kali dianggap
              sebagai buah simbolis dalam berbagai festival dan upacara adat.
              Mereka juga sering hadir dalam cerita rakyat dan legenda setempat.
              <br />
              5.<strong> Pertanian </strong> Tanaman langsat biasanya ditanam
              sebagai tanaman buah komersial di daerah tropis, dan kebun langsat
              dapat menjadi sumber pendapatan utama bagi petani di beberapa
              wilayah. <br />
              6. <strong> Perawatan:</strong> Tanaman langsat membutuhkan
              perawatan yang teratur, termasuk penyiraman yang cukup, pemupukan,
              dan pemangkasan untuk menjaga pertumbuhan dan produksi buah yang
              optimal.
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
};

export default Langsat;

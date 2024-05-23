import React from "react";
import Navbar from "/src/components/Navbar";
import CopyRight2 from "/src/components/CopyRight2";
import ButtonBackToCard from "/src/components/ButtonBackToCard";

function PasakBumi() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full h-72 rounded-lg"
                src="src/assets/images/pasakbumi.jpg"
                alt="Calliandra Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Pasak Bumi </h1>
              <p className="mt-4 text-gray-700 text-justify">
                Tanaman Pasak Bumi (Eurycoma longifolia) adalah tumbuhan asli
                hutan tropis di Asia Tenggara, terutama ditemukan di Malaysia,
                Indonesia, dan Thailand. Tanaman ini dikenal dengan berbagai
                nama lokal, termasuk Tongkat Ali di Malaysia dan Pasak Bumi di
                Indonesia. Akar Pasak Bumi telah lama digunakan dalam pengobatan
                tradisional sebagai tonik untuk meningkatkan vitalitas dan
                kesehatan pria.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Calliandra: <br />
              1. <strong> Asal Usul : </strong> Pasak bumi adalah tanaman asli
              dari Asia Tenggara, terutama ditemukan di negara-negara seperti
              Malaysia, Indonesia, dan Thailand. <br />
              2. <strong> Deskripsi Morfologi : </strong> Pasak bumi adalah
              pohon kecil atau semak yang dapat tumbuh hingga 10 meter. Daunnya
              berbentuk majemuk dengan anak daun yang panjang dan lancip. Bunga
              pasak bumi berwarna merah muda hingga merah dan tumbuh dalam
              tandan. <br />
              3. <strong> Bagian yang Digunakan:</strong> Akar pasak bumi adalah
              bagian tanaman yang paling sering digunakan. Akar ini dikenal
              memiliki berbagai khasiat dan digunakan dalam pengobatan
              tradisional. <br />
              4. <strong> Penggunaan Tradisional: </strong> Dalam pengobatan
              tradisional, pasak bumi digunakan sebagai tonik untuk meningkatkan
              stamina dan vitalitas pria. Ini sering disebut sebagai tongkat ali
              di Malaysia dan dipercaya dapat meningkatkan libido dan kinerja
              seksual. <br />
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

export default PasakBumi;

import React from "react";
import Navbar from "/src/components/Navbar";
import CopyRight2 from "/src/components/CopyRight2";
import ButtonBackToCard from "/src/components/ButtonBackToCard";

function Calliandra() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full rounded-lg"
                src="src/assets/images/kaliandra.jpg"
                alt="Calliandra Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Calliandra</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Calliandra adalah genus tanaman berbunga yang berasal dari
                daerah tropis dan subtropis di Amerika. Tanaman ini dikenal
                karena bunga-bunganya yang mencolok dan daun-daunnya yang halus.
                Salah satu spesies yang paling dikenal adalah Calliandra
                haematocephala, juga dikenal sebagai "bunga sikat botol" karena
                bentuk bunganya yang menyerupai sikat botol.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Calliandra: <br />
              1. <strong> Asal Usul : </strong> Calliandra berasal dari daerah
              tropis dan subtropis di Amerika Tengah dan Selatan. Tanaman ini
              ditemukan di berbagai habitat, mulai dari tepi hutan hingga padang
              rumput. <br />
              2. <strong> Deskripsi Morfologi : </strong> Tanaman berbunga ini
              memiliki morfologi yang khas. Daunnya majemuk, terdiri dari
              daun-daun kecil yang tersusun menyirip. Daun muda berwarna
              kemerahan atau keunguan, sementara daun dewasa berwarna hijau tua.
              Bunganya berbentuk seperti sikat dengan benang sari yang panjang
              dan mencolok, sering kali berwarna merah cerah, putih, atau merah
              muda. Batangnya berkayu dan kuat, dengan cabang-cabang yang tumbuh
              simetris. <br />
              3. <strong> Manfaat dan Penggunaan :</strong> Tanaman ini sering
              digunakan sebagai tanaman hias karena bunganya yang indah dan
              mencolok, menambah keindahan dalam taman dan kebun. Selain itu,
              Calliandra juga digunakan sebagai tanaman pagar hidup atau
              pembatas, karena kemampuannya untuk tumbuh padat dan rapi. Secara
              ekologis, Calliandra membantu meningkatkan kesuburan tanah melalui
              fiksasi nitrogen, yang bermanfaat dalam sistem agroforestri dan
              pertanian berkelanjutan. Beberapa spesies Calliandra juga memiliki
              potensi sebagai tanaman obat tradisional. Di beberapa daerah, daun
              Calliandra digunakan sebagai pakan ternak karena kandungan nutrisi
              yang baik. <br />
              4. <strong> Karakteristik Pertumbuhan: </strong> Calliandra adalah
              tanaman yang tumbuh dengan cepat, mampu mencapai ketinggian 3-6
              meter dalam beberapa tahun. Tanaman ini tumbuh subur di daerah
              tropis dan subtropis dengan tanah yang subur dan sinar matahari
              yang cukup. Calliandra juga tahan terhadap kondisi kekeringan.
              Perawatan yang diperlukan termasuk penyiraman teratur saat masih
              muda, pemupukan berkala untuk pertumbuhan yang sehat dan berbunga
              lebat, serta pemangkasan untuk mempertahankan bentuk tanaman dan
              merangsang pertumbuhan bunga yang lebih banyak. <br />
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

export default Calliandra;

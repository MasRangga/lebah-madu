import React from "react";
import Navbar from "/src/components/Navbar";
import CopyRight2 from "/src/components/CopyRight2";
import ButtonBackToCard from "/src/components/ButtonBackToCard";

const TapakDara = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full rounded-lg"
                src="src/assets/images/tapakdara2.jpg"
                alt="Santos Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Tapak Dara</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Tanaman tapak dara (Catharanthus roseus) adalah tanaman hias
                yang juga memiliki nilai obat. Tanaman ini dikenal karena
                bunganya yang cantik dan warna-warni yang bervariasi, seperti
                merah muda, ungu, putih, atau kombinasi di antaranya. Tapak dara
                juga dikenal dengan sebutan vinca atau periwinkle.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Kopi Robusta: <br />
              1. <strong> Asal Usul : </strong> Tapak dara berasal dari wilayah
              tropis dan subtropis di berbagai belahan dunia, termasuk Afrika,
              Madagaskar, dan Asia Selatan. <br />
              2. <strong> Deskripsi Morfologi : </strong> Tanaman tapak dara
              merupakan semak kecil yang memiliki daun hijau mengkilap, bulat,
              dan berdiameter kecil. Bunganya berwarna-warni, sering kali merah
              muda, ungu, putih, atau kombinasi di antaranya. <br />
              3. <strong> Penggunaan Sebagai Tanaman Hias:</strong> Tapak dara
              adalah tanaman hias yang populer di taman, pot, atau bedengan
              bunga. Bunganya yang berwarna-warni menambah keindahan lanskap dan
              bisa bertahan lama dalam berbunga. <br />
              4. <strong> Kandungan Kimia: </strong> Tapak dara mengandung
              berbagai senyawa kimia yang memiliki potensi farmakologis,
              termasuk alkaloid vinblastin dan vincristin yang digunakan dalam
              pengobatan kanker. <br />
              5.<strong> Penggunaan dalam Pengobatan Tradisional : </strong> Di
              beberapa budaya, ekstrak dari tanaman tapak dara digunakan dalam
              pengobatan tradisional untuk mengatasi berbagai penyakit, termasuk
              diabetes, hipertensi, dan malaria. <br />
              6. <strong> Ketahanan dan Perawatan:</strong> Tanaman tapak dara
              relatif mudah ditanam dan tumbuh subur di daerah dengan sinar
              matahari cukup dan tanah yang subur. Mereka juga memiliki
              ketahanan yang baik terhadap berbagai kondisi cuaca.
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

export default TapakDara;

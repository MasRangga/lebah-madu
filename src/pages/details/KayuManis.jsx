import React from "react";
import Navbar from "/src/components/Navbar";
import CopyRight2 from "/src/components/CopyRight2";
import ButtonBackToCard from "/src/components/ButtonBackToCard";

function KayuManis() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full h-64 rounded-lg"
                src="src/assets/images/kayumanis.jpg"
                alt="Calliandra Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Kayu Manis </h1>
              <p className="mt-4 text-gray-700 text-justify">
                Tanaman kayu manis (Cinnamomum verum atau Cinnamomum cassia)
                adalah pohon kecil yang berasal dari Asia Selatan dan Tenggara,
                terutama Sri Lanka, India, dan Cina. Tanaman ini terkenal karena
                kulit kayunya yang digunakan sebagai rempah-rempah yang populer,
                yaitu kayu manis. Kayu manis memiliki aroma harum dan rasa manis
                yang khas, dan sering digunakan dalam masakan, kue, minuman, dan
                obat-obatan tradisional.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Calliandra: <br />
              1. <strong> Asal Usul : </strong> Kayu manis berasal dari wilayah
              tropis di Asia Selatan dan Tenggara, terutama Sri Lanka (untuk
              kayu manis Ceylon) dan Cina (untuk kayu manis Cassia). <br />
              2. <strong> Deskripsi Morfologi : </strong> Pohon kayu manis
              adalah pohon kecil hingga sedang dengan daun hijau mengkilap yang
              berbentuk lonjong. Kulit kayunya berwarna cokelat dan mengeluarkan
              aroma harum yang khas saat dikeringkan. <br />
              3. <strong> Kulit Kayu sebagai Produk Utama:</strong> Kulit kayu manis
              yang dikeringkan digunakan sebagai rempah-rempah yang populer.
              Kayu manis dijual dalam bentuk batang (gulungan) atau bubuk dan
              digunakan secara luas dalam berbagai masakan, minuman, dan produk
              pangan lainnya. <br />
              4. <strong> Rasa dan Aroma: </strong> Kayu manis memiliki rasa manis dan sedikit pedas dengan aroma yang kuat dan harum. Kayu manis Ceylon biasanya memiliki rasa yang lebih lembut dan manis, sedangkan kayu manis Cassia memiliki rasa yang lebih kuat dan sedikit pahit. <br />
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

export default KayuManis;

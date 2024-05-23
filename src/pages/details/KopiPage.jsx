import React from "react";
import Navbar from "/src/components/Navbar";
import CopyRight2 from "/src/components/CopyRight2";
import ButtonBackToCard from "/src/components/ButtonBackToCard";

const Kopi = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full rounded-lg"
                src="src/assets/images/kopirobusta2.jpg"
                alt="Santos Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Kopi Robusta</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Tanaman kopi Robusta (Coffea canephora) adalah salah satu
                spesies kopi yang penting secara komersial, selain kopi Arabika.
                Tanaman kopi Robusta dikenal karena memiliki ketahanan yang
                lebih baik terhadap penyakit dan kondisi cuaca yang tidak ideal
                dibandingkan dengan kopi Arabika.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Kopi Robusta: <br />
              1. <strong> Asal Usul : </strong> Tanaman langsat berasal dari daerah tropis Asia Tenggara, terutama Indonesia, Malaysia, Thailand, dan Filipina. <br />
              2. <strong> Karakteristik Pohon : </strong> Pohon kopi Robusta
              cenderung lebih pendek dan lebih berbulu dibandingkan dengan kopi
              Arabika. Daunnya lebih besar dan bertangkai lebih panjang. <br />
              3. <strong> Buah dan Biji:</strong> Buah kopi Robusta biasanya
              lebih kecil daripada kopi Arabika, dengan kulit yang lebih tebal.
              Biji kopi Robusta cenderung lebih kecil dan lebih bulat, dan
              mengandung lebih banyak kafein daripada biji kopi Arabika. <br />
              4. <strong> Rasa dan Aroma: </strong> Kopi Robusta memiliki rasa
              yang lebih kuat, lebih pahit, dan lebih asam dibandingkan dengan
              kopi Arabika. Aroma kopi Robusta juga cenderung lebih kuat dan
              lebih beraroma daripada Arabika. <br />
              5.<strong> Ketahanan dan Produktivitas : </strong> Salah satu
              keunggulan utama kopi Robusta adalah ketahanannya yang lebih baik
              terhadap penyakit dan kondisi cuaca yang tidak ideal. Tanaman ini
              tumbuh dengan baik di daerah dengan ketinggian rendah hingga
              sedang, dan biasanya lebih produktif daripada kopi Arabika. <br />
              6. <strong> Penggunaan:</strong> Kopi Robusta sering digunakan
              sebagai bahan baku untuk kopi instan, campuran kopi, atau kopi
              espresso. Biji kopi Robusta juga dapat memberikan tubuh yang lebih
              berat dan crema yang lebih kental pada minuman kopi espresso.
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

export default Kopi;

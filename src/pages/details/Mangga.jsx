import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight2 from "../../components/CopyRight2";
import ButtonBackToCard from "../../components/ButtonBackToCard";

function Mangga() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full rounded-lg"
                src="src/assets/images/mangga.jpg"
                alt="Mangga Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Mangga</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Mangga (Mangifera indica) adalah tanaman buah tropis yang
                berasal dari wilayah Asia Selatan, khususnya India, serta dari
                Myanmar dan Indocina. Pohon mangga telah menyebar luas dan
                menjadi salah satu buah tropis yang paling populer di dunia.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Mangga: <br />
              1. <strong> Asal Usul : </strong> Mangga berasal dari daerah
              tropis di Asia Selatan, khususnya India bagian timur, Myanmar, dan
              Indocina. Tanaman ini telah dibudidayakan selama ribuan tahun dan
              kemudian menyebar ke berbagai belahan dunia. <br />
              2. <strong> Deskripsi Morfologi : </strong> Pohon mangga memiliki
              batang yang tegak dan cabang yang menyebar luas. Daunnya panjang,
              berwarna hijau tua, berbentuk lancip, dan tersusun secara menjari.
              Bunganya kecil dan berwarna putih, terkumpul dalam malai yang
              besar, sering kali memiliki aroma yang harum. Buah mangga adalah
              buah besar, bulat-oval, dan bisa berwarna kuning, hijau, atau
              merah saat matang. Daging buahnya manis, berair, dan berwarna
              kuning-oranye. <br />
              3. <strong> Manfaat dan Penggunaan:</strong> Buah mangga sangat
              populer untuk dikonsumsi langsung atau diolah menjadi jus, salad
              buah, es krim, dan berbagai hidangan penutup lainnya. Budidaya
              mangga memiliki nilai ekonomi yang tinggi di banyak negara tropis
              dan subtropis, menjadi salah satu komoditas buah ekspor utama.
              Pohon mangga juga digunakan sebagai tanaman hias di taman-taman
              besar atau pekarangan, dan daun serta bunga mangga sering
              digunakan dalam aransemen bunga dan dekorasi. <br />
              4. <strong> Karakteristik Pertumbuhan </strong> Pertumbuhan mangga
              mencakup kebutuhan akan iklim hangat dan lembap serta sinar
              matahari penuh. Pohon ini memerlukan tanah yang subur dan memiliki
              drainase yang baik. Mangga adalah pohon yang tumbuh cukup cepat
              jika diberi perawatan yang baik, dan bisa mulai berbuah dalam
              beberapa tahun setelah ditanam. Perawatan rutin termasuk
              penyiraman yang teratur, pemupukan secara berkala, dan pemangkasan
              untuk menjaga bentuk pohon dan produksi buah yang
              lebih baik.
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

export default Mangga;

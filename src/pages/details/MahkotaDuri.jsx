import React from "react";
import Navbar from "../../components/Navbar";
import CopyRight2 from "../../components/CopyRight2";
import ButtonBackToCard from "../../components/ButtonBackToCard";

function MahkotaDuri() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div>
              <img
                className="w-full rounded-lg"
                src="src/assets/images/mahkotaduri.jpg"
                alt="Mahkota Duri Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Mahkota Duri</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Mahkota Duri atau Crown of Thorns (Euphorbia milii) adalah
                tanaman sukulen yang terkenal karena bunga yang mencolok dan
                daun-daunnya yang kecil dan berduri. Tanaman ini memiliki bunga
                dengan warna yang sangat bervariasi, dengan perawatan yang cukup
                mudah.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Mahkota Duri: <br />
              1. <strong> Asal Usul : </strong> Tanaman sukulen ini berasal dari
              Madagaskar, tetapi telah menyebar luas ke berbagai daerah tropis
              dan subtropis di seluruh dunia. <br />
              2. <strong> Deskripsi Morfologi : </strong> Mahkota Duri memiliki
              batang berduri dan daun-daun kecil yang tersebar di sepanjang
              batang. Bunganya berwarna-warni, sering kali merah atau merah
              muda, tetapi ada juga yang berwarna kuning atau putih. Bunga-bunga
              ini terkumpul dalam tandan yang menarik, memberikan tanaman ini
              daya tarik visual yang kuat. <br />
              3. <strong> Manfaat dan Penggunaan:</strong> Tanaman Mahkota Duri
              sering digunakan sebagai tanaman hias di taman atau dalam pot.
              Bunga-bunga yang cerah dan kontras dengan daunnya yang hijau gelap
              membuatnya populer di berbagai negara. Tanaman ini juga sering
              ditanam sebagai tanaman pagar hidup karena pertumbuhannya yang
              padat dan mudah dirawat. <br />
              4. <strong> Karakteristik Pertumbuhan: </strong> Mahkota Duri
              tumbuh subur di daerah yang panas dan kering dengan sinar matahari
              langsung atau naungan ringan. Tanaman ini toleran terhadap kondisi
              tanah yang kurang subur dan memerlukan sedikit air setelah dewasa.
              Tanaman ini dapat tumbuh hingga ketinggian sekitar 1 meter dengan
              daun-daunnya yang rimbun dan berduri. Perawatan utamanya adalah
              menyiram secara teratur saat tanah sudah kering dan memastikan
              tanaman mendapatkan cukup cahaya matahari. <br />
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

export default MahkotaDuri;

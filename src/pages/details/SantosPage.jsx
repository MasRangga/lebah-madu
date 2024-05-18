import React from "react";
import Navbar from "/src/components/Navbar";
import CopyRight2 from "/src/components/CopyRight2";
import ButtonBackToCard from "/src/components/ButtonBackToCard";

const Santos = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md ">
          <div className="md:flex md:items-start">
            <div className="md:w-1/3">
              <img
                className="w-full rounded-lg"
                src="src/assets/images/santoss.jpg"
                alt="Santos Plant"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold text-gray-900">Santos</h1>
              <p className="mt-4 text-gray-700 text-justify">
                Tanaman Santos biasanya merujuk pada tanaman dengan nama ilmiah
                Cordyline fruticosa. Ini adalah tanaman hias yang berasal dari
                daerah tropis di Pasifik Selatan, seperti Hawaii dan Polinesia.
                Tanaman ini sering ditanam sebagai tanaman indoor atau outdoor
                karena daunnya yang cantik dan variasi warna yang menarik.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-justify">
              Berikut adalah beberapa ciri khas tanaman Santos: <br />
              1. <strong> Daun:</strong> Daunnya panjang, sempit, dan
              melengkung. Warna daun bervariasi dari hijau tua, hijau cerah,
              hingga merah, ungu, atau kuning dengan strip atau pola
              berbeda-beda tergantung pada varietasnya. <br />
              2. <strong> Batang:</strong> Batangnya cukup tebal dan berkayu,
              sering kali dengan warna yang mencolok. <br />
              3. <strong> Bunga:</strong> Tanaman ini dapat menghasilkan bunga
              kecil yang tidak terlalu mencolok, terutama jika ditanam di dalam
              ruangan. Namun, fokus utamanya adalah pada daunnya. <br />
              4. <strong> Kebutuhan Tumbuh: </strong> Tanaman Santos menyukai
              sinar matahari yang terang namun tidak langsung. Mereka juga
              membutuhkan tanah yang lembab tetapi baik drainasenya. Di
              lingkungan yang hangat, tanaman ini bisa tumbuh hingga tinggi yang
              cukup besar, bisa mencapai beberapa kaki. <br />
              5.<strong> Perawatan: </strong> Perawatan umum termasuk penyiraman
              teratur tetapi tidak berlebihan, pemupukan ringan setiap bulan,
              dan membersihkan debu dari daunnya secara berkala. Juga, pastikan
              tanah tetap lembab tetapi tidak tergenang air. <br />
              6. <strong> Kegunaan:</strong> Tanaman ini sering digunakan
              sebagai tanaman hias dalam pot atau ditanam di taman tropis.
              Beberapa orang juga menggunakan daunnya dalam aransemen bunga.
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

export default Santos;

import React from "react";

const TanamanAmp = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-20 pl-10 pr-10">
      <div className="container mx-auto px-4 md:px-0 flex justify-between items-center gap-8 ">
        <div className="max-w-lg order-2">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Kemuning
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Tanaman kemuning (Murraya paniculata), semak hijau abadi asli Asia
            Tenggara dan Asia Timur, dikenal karena daun kecilnya yang mengkilap
            dan bunga harum putih kekuningan yang muncul pada musim semi hingga
            musim panas.
          </p>
        </div>
        <div className="max-w-lg order-1">
          <img
            src="/src/assets/images/kemuning.jpg"
            alt="air mata pengantin"
            className="w-96 rounded-lg"
          />
          <p className="text-sm text-gray-600 mt-2">Foto dari Website</p>
        </div>
      </div>
    </div>
  );
};

export default TanamanAmp;

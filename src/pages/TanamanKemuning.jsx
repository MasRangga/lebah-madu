import React from "react";

const TanamanAmp = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 md:px-0 flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        <div className="max-w-lg md:w-1/2 order-2">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Kemuning
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tanaman kemuning (Murraya paniculata), semak hijau abadi asli Asia
            Tenggara dan Asia Timur, dikenal karena daun kecilnya yang mengkilap
            dan bunga harum putih kekuningan yang muncul pada musim semi hingga
            musim panas.
          </p>
        </div>
        <div className="max-w-lg md:w-1/2 order-1">
          <img
            src="/src/assets/images/kemuning.jpg"
            alt="kemuning"
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-600 mt-2">Foto oleh John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default TanamanAmp;

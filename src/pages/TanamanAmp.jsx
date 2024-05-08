import React from "react";

const TanamanAmp = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 md:px-0 flex flex-col-reverse md:flex-row justify-center items-center gap-8">
        <div className="max-w-lg md:w-1/2 order-2">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">
            Air Mata Pengantin
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tanaman air mata pengantin (Saintpaulia), yang juga dikenal sebagai
            African Violet, adalah anggota dari keluarga Gesneriaceae. Tanaman
            ini berasal dari daerah tropis Afrika Timur seperti Tanzania dan
            Kenya. Nama African Violet sering digunakan karena kesamaan bunganya
            dengan tanaman violet yang sebenarnya, meskipun mereka sebenarnya
            tidak berhubungan secara botani.
          </p>
        </div>
        <div className="max-w-lg md:w-1/2 order-1">
          <img
            src="/src/assets/images/AMP.jpg"
            alt="air mata pengantin"
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-600 mt-2">Foto oleh John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default TanamanAmp;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">TENTANG KAMI</h1>
            <div className="flex justify-center items-center gap-5">
              <h3>Beranda</h3>
              <h3>Tentang Kami</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-[250px] gap-3">
        <h1 className="text-[#a5dd9b] text-4xl font-bold">VISI & </h1>
        <h1 className="text-4xl font-bold">MISI</h1>
      </div>

      <div className="flex flex-col w-full h-[350px] lg:flex-row bg-[#a5dd9b] p-10">
        <div className="grid flex-grow place-items-center">
          <h1 className="text-2xl font-bold">VISI</h1>
          <p className="w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quod
            nostrum porro sed? Quae magnam illum quas officia minus sed, ad illo
            nam hic et, est maiores, ratione dolore debitis.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsa quod nostrum porro sed?
            Quae magnam illum quas officia minus sed, ad illo nam hic et, est
            maiores, ratione dolore debitis.
          </p>
        </div>
        <div className="h-[600px] w-[2px] bg-white"></div>
        <div className="grid flex-grow place-items-center">
          <h1 className="text-2xl font-bold">MISI</h1>
          <p className="w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quod
            nostrum porro sed? Quae magnam illum quas officia minus sed, ad illo
            nam hic et, est maiores, ratione dolore debitis.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Ipsa quod nostrum porro sed?
            Quae magnam illum quas officia minus sed, ad illo nam hic et, est
            maiores, ratione dolore debitis.
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a5dd9b"
          fill-opacity="1"
          d="M0,32L720,128L1440,32L1440,0L720,0L0,0Z"
        ></path>
      </svg>

      <Footer />
    </div>
  );
};

export default AboutPage;

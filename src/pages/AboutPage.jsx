import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/gambarabout.png";

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
      <div className="h-[100px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a5dd9b"
            fill-opacity="1"
            d="M0,32L720,128L1440,32L1440,0L720,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="flex justify-center items-center h-[250px] gap-3">
        <h1 className="text-[#a5dd9b] text-4xl font-bold">
          SEJARAH PETERNAKAN LEBAH MADU KARAMUNTING
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center w-[80%] h-[30%] gap-5">
        <img src={image} alt="Deskripsi gambar" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
          delectus ducimus. Ducimus alias recusandae odio, quod dicta sunt ad
          dignissimos tenetur suscipit eaque natus voluptate, unde nostrum vero
          excepturi inventore laudantium eligendi? Obcaecati culpa eaque quam
          nesciunt quaerat ullam quas laboriosam, sit, placeat ipsam facere
          quasi saepe aliquam? Modi repudiandae expedita natus provident
          reiciendis debitis. Error pariatur, incidunt, delectus explicabo
          aperiam repellat soluta, praesentium assumenda rerum tempore maxime.
          Tenetur ratione pariatur voluptatibus nesciunt impedit. Eveniet
          commodi velit, minima nisi explicabo autem veritatis nam nesciunt
          numquam rerum, inventore libero alias. Vero quae laudantium recusandae
          temporibus quidem quasi, laborum aliquid ullam culpa sint blanditiis
          ipsam, accusantium amet sequi fugit sunt natus, harum nemo accusamus
          nostrum molestias cupiditate. Distinctio harum rerum deserunt in quod
          delectus enim, dignissimos nulla voluptatem ab maxime dolor saepe aut
          culpa id ducimus deleniti veniam voluptates? Esse quis deserunt
          delectus quasi quibusdam quo quisquam quidem rem, earum cum laboriosam
          nihil, ea iure atque. Sunt cumque quaerat dolores provident in fuga
          molestias, magnam odit? Blanditiis debitis eum inventore, repellat,
          nobis doloremque non maiores quam eligendi impedit amet doloribus
          totam incidunt provident iure quod exercitationem, quis cupiditate
          adipisci explicabo odio! Ratione, labore. Odit, at tenetur, repellat
          similique aliquid vitae eveniet facilis sunt atque quam corporis ipsum
          id enim nam temporibus vero! Expedita assumenda vel quisquam minus,
          quo error exercitationem eligendi! Dolorem a mollitia minus. Labore
          voluptatum expedita fugit distinctio deleniti voluptates accusantium
          reprehenderit. Blanditiis provident ad molestiae soluta beatae
          temporibus quo vel! Harum expedita ullam nemo commodi iste cupiditate
          quis veritatis.
        </p>
      </div>

      <div className="flex justify-center items-center h-[250px] gap-3">
        <h1 className="text-[#a5dd9b] text-4xl font-bold">
          LOKASI PETERNAKAN LEBAH MADU KARAMUNTING
        </h1>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;

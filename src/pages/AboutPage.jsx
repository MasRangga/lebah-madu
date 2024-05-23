import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import image from "../assets/about-sejarah.jpeg";
import foto from "../assets/about-hero.jpg";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen">
        <img className="hero min-h-screen" src={foto} alt="Kelompok Tani Karamunting" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">TENTANG KAMI</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center h-[250px] gap-3 sm:flex-row">
        <h1 className="text-[#a5dd9b] text-4xl font-bold">VISI & </h1>
        <h1 className="text-4xl font-bold">MISI</h1>
      </div>

      <div className="flex flex-col w-full h-auto lg:h-[400px] lg:flex-row bg-[#a5dd9b] p-10">
        <div className="grid flex-grow place-items-center">
          <h1 className="text-2xl font-bold">VISI</h1>
          <p className="w-[90%] lg:w-[50%] text-md">
            Menjadi kelompok tani lebah madu kelulut yang mandiri, inovatif, dan
            berkelanjutan dalam mengelola sumber daya alam, serta memberikan
            kontribusi signifikan terhadap peningkatan kesejahteraan ekonomi
            masyarakat dan pelestarian lingkungan.
          </p>
        </div>
        <div className="grid flex-grow place-items-center">
          <h1 className="text-2xl font-bold">MISI</h1>
          <p className="w-[90%] lg:w-[70%] text-md">
            <br /> 1. Menyelenggarakan pelatihan dan pendidikan berkelanjutan
            bagi anggota kelompok tani untuk mengembangkan keterampilan dalam
            budidaya lebah madu kelulut dan manajemen usaha. <br />
            2. Mendorong praktik budidaya yang ramah lingkungan dan
            berkelanjutan untuk menjaga kelestarian ekosistem hutan kota. <br />
          </p>
        </div>
      </div>
      <div className="h-[100px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a5dd9b"
            fillOpacity="1"
            d="M0,32L720,128L1440,32L1440,0L720,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="flex justify-center items-center h-[250px] gap-3">
        <h1 className="text-[#a5dd9b] text-4xl font-bold">
          SEJARAH PETERNAKAN LEBAH MADU KARAMUNTING
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen gap-5 p-5">
        <img className="w-full max-w-3xl" src={image} alt="Deskripsi gambar" />
        <p className="w-full max-w-3xl">
          <br />
          Kelompok Tani Lebah Madu Karamunting didirikan sebagai bagian dari
          inisiatif masyarakat di Kelurahan Telagasari, Balikpapan, untuk
          meningkatkan kesejahteraan ekonomi melalui budidaya lebah madu
          kelulut. Kelompok ini terbentuk dari hasil kolaborasi antara
          masyarakat setempat dengan PT Pertamina Hulu Kalimantan Timur (PHKT)
          melalui program CSR mereka yang berfokus pada pemberdayaan ekonomi dan
          pelestarian lingkungan. <br /> Sejarah kelompok ini bermula pada tahun
          2021, ketika PHKT menggelar pelatihan budidaya lebah madu kelulut
          bekerja sama dengan Kelompok Kerja (Pokja) Pengelola Hutan Kota
          Pendidikan Telagasari (HKPTS). Pelatihan ini diadakan di Aula
          Kelurahan Telagasari dan dihadiri oleh berbagai perwakilan dari
          pemerintah kota Balikpapan, termasuk dari Dinas Lingkungan Hidup dan
          pihak kelurahan. <br /> Inisiatif ini mendapat sambutan positif dari
          berbagai pihak. Kepala Bidang Peningkatan Kapasitas Lingkungan Hidup
          dan Penegakan Hukum, Noorlenawati, mengapresiasi perhatian PHKT
          terhadap pelestarian lingkungan yang juga berdampak pada peningkatan
          ekonomi masyarakat sekitar. Lurah Telagasari, Arini Amir, menyatakan
          harapannya agar budidaya lebah kelulut dapat meningkatkan pendapatan
          masyarakat setempat. <br /> Perwakilan manajemen PHKT, Asih Soenarih,
          menyampaikan bahwa pelatihan ini diharapkan dapat memotivasi
          masyarakat untuk mengembangkan usaha budidaya lebah madu kelulut dan
          menangkap potensi peningkatan ekonomi alternatif, terutama di masa
          pandemi COVID-19. Selain memberikan pelatihan, PHKT juga menyerahkan
          bantuan berupa 25 paket bibit dan media sarang lebah kelulut, serta
          berkomitmen untuk memberikan pendampingan dan monitoring evaluasi
          program pasca pelatihan. Dengan adanya program ini, Kelompok Tani
          Lebah Madu Karamunting diharapkan mampu menjadi model pemberdayaan
          masyarakat yang sejalan dengan tujuan Sustainable Development Goals
          (SDGs) tujuan 8, yaitu mendukung pertumbuhan ekonomi yang inklusif dan
          berkelanjutan, tenaga kerja penuh dan produktif, serta pekerjaan yang
          layak bagi semua. Kelompok ini kini bergerak aktif dalam budidaya
          lebah kelulut dan berupaya meningkatkan kesejahteraan anggotanya serta
          menjaga kelestarian ekosistem hutan kota. <br />
        </p>
      </div>

      <div className="flex justify-center items-center h-[250px]">
        <h1 className="text-[#a5dd9b] text-4xl font-bold">
          LOKASI PETERNAKAN LEBAH MADU KARAMUNTING
        </h1>
      </div>

      <div className="flex justify-center items-center h-[500px] p-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084580.6788381045!2d112.61309900000003!3d-1.26344399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147bf74263bd5%3A0xd98234e90cd3bb87!2sBudidaya%20Lebah%20Kelompok%20Tani%20Karamunting!5e0!3m2!1sen!2sid!4v1715949879680!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Herosection from "../assets/Herosection.png";
import Section2 from "../assets/Section2.png";
import { ImWhatsapp } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { Carousel } from "flowbite-react";

import AOS from "aos";
import "aos/dist/aos.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import images
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_3 from "../assets/img_3.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_6 from "../assets/img_6.jpg";
import img_7 from "../assets/img_7.jpg";

// Import icons
import iconalamtest from "../assets/iconalamtest.svg";
import iconbuku from "../assets/iconbuku.svg";
import iconwisata from "../assets/iconwisata.svg";
import iconmadu from "../assets/iconmadu.svg";
import Lokasi from "../assets/Lokasi.svg";
import Kualitas from "../assets/Kualitas.svg";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section>
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <h1 className="mt-4 mb-6 font-bold text-2xl md:text-3xl lg:text-4xl text-black leading-tight text-center lg:text-left font-poppins">
                Peternakan
                <span className="text-primary"> Lebah Madu</span> Karamunting
              </h1>
              <p className="mb-8 text-center lg:text-left text-black opacity-50 text-base md:text-lg lg:text-xl font-poppins">
                Bersama Peternakan Lebah Madu Karamunting Merajut Keindahan Alam
                dengan Kecerdasan Lebah dan Kearifan Berkelanjutan. Temukan
                Rahasia Madu dan Eksplorasi Peran Vital Lebah dalam Ekosistem.
              </p>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
                <button className="flex justify-center items-center border-2 rounded-full text-sm py-3 px-6 lg:py-4 lg:px-8 border-primary bg-white hover:bg-primary group duration-300 drop-shadow-lg">
                  <a
                    href="https://wa.me/6285346901814"
                    target="_blank"
                    className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-lg lg:font-medium"
                    rel="noopener noreferrer"
                  >
                    <ImWhatsapp className="w-5 h-5 lg:w-6 lg:h-6" />
                    <p>Hubungi Kami</p>
                  </a>
                </button>
                <button className="flex justify-center items-center gap-2 border-2 border-primary rounded-full text-sm py-3 px-6 lg:py-4 lg:px-8 bg-primary text-white hover:bg-primary-dark hover:border-primary-dark group duration-300 drop-shadow-lg">
                  <p>Video</p>
                  <FaAngleRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
              <img
                src={Herosection}
                alt="herosection"
                className="w-full lg:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kenapa Karamunting */}
      <div className="mx-4">
        <div className="mb-8">
          {/* Heading */}
          <div
            className="flex flex-col gap-3 text-center"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          >
            <h1 className="text-black font-bold text-2xl lg:text-4xl">
              Kenapa Harus <span className="text-primary"> Lebah Madu</span>{" "}
              <br /> Karamunting
            </h1>
            <p className="text-base mt-3 font-poppins text-slate-700 lg:text-lg">
              Alasan kenapa harus berkunjung ke wisata Lebah Madu Karamunting.
            </p>
          </div>

          {/* Konten */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 mt-12 ml-40">
            <img
              src={Section2}
              alt="section2"
              className="lg:max-w-1/2"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="320"
              data-aos-duration="900"
            />
            {/* Konten2 */}
            <div className="flex flex-col gap-11 mb-40 ml-12">
              {/* Keindahan Alam */}
              <div
                className="flex gap-4 lg:gap-6 items-center"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1200"
                data-aos-duration="900"
                data-aos-delay="250"
              >
                <img src={iconalamtest} alt="keindahanalam" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
                    Keindahan Alam
                  </h1>
                  <p className="text-sm font-light lg:font-normal lg:text-base max-w-md">
                    Wisata Lebah Madu Karamunting: Keindahan alam dengan bunga
                    karamunting dan hutan hijau yang menenangkan.
                  </p>
                </div>
              </div>
              {/* Pendidikan Lebah Madu */}
              <div
                className="flex gap-4 lg:gap-6 items-center"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1200"
                data-aos-duration="900"
                data-aos-delay="250"
              >
                <img src={iconbuku} alt="iconbuku" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
                    Pendidikan Tentang Lebah Madu
                  </h1>
                  <p className="text-sm font-light lg:font-normal lg:text-base max-w-md">
                    Mempelajari segala hal tentang kehidupan lebah. Mulai dari
                    proses pembuatan madu, polinasi tumbuhan, hingga peran
                    penting lebah dalam ekosistem.
                  </p>
                </div>
              </div>
              {/* Wisata Edukatif untuk Keluarga */}
              <div
                className="flex gap-4 lg:gap-6 items-center"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1200"
                data-aos-duration="900"
                data-aos-delay="250"
              >
                <img src={iconwisata} alt="iconwisata" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold ">
                    Wisata Edukatif untuk Keluarga
                  </h1>
                  <p className="text-sm font-light lg:font-normal lg:text-base max-w-md">
                    Bagi keluarga, Wisata Lebah Madu Karamunting adalah
                    destinasi yang sempurna. Anak-anak akan belajar tentang alam
                    sambil bersenang-senang.
                  </p>
                </div>
              </div>
              {/* Produk Madu Asli Berkualitas */}
              <div
                className="flex gap-4 lg:gap-6 items-center"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="1200"
                data-aos-duration="900"
                data-aos-delay="250"
              >
                <img src={iconmadu} alt="iconmadu" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
                    Produk Madu Asli Berkualitas
                  </h1>
                  <p className="text-sm font-light lg:font-normal lg:text-base max-w-md">
                    Di wisata ini, Anda juga dapat membeli madu asli berkualitas
                    tinggi langsung dari sumbernya. Memiliki manfaat
                    kesehatannya yang luar biasa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tanaman Carousel */}
      <div className="relative pt-4 bg-secondary mb-10">
        {/* Konten */}
        <div
          className="flex flex-col gap-3 text-center"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <h1 className="text-black font-bold text-2xl lg:text-4xl mt-3">
            Tanaman Di <span className="text-primary"> Lebah Madu</span> <br />{" "}
            Karamunting
          </h1>
          <p className="text-base mt-3 font-poppins text-slate-700 lg:text-lg">
            Jenis Tanaman Menarik yang Ditemui di Wisata Lebah Madu Karamunting.
          </p>
        </div>
        {/* Slider Swiper */}
        <div className="container mx-auto px-4">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img
                  src={img_1}
                  alt="slide_image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img
                  src={img_2}
                  alt="slide_image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img
                  src={img_3}
                  alt="slide_image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img
                  src={img_4}
                  alt="slide_image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img
                  src={img_5}
                  alt="slide_image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img
                  src={img_6}
                  alt="slide_image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide-content">
                <img
                  src={img_7}
                  alt="slide_image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>

      {/* Maps */}
      <div>
        <div
          className="flex flex-col gap-3 text-center"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <p className="text-primary font-poppins text-left ml-10">
            Lokasi Toko Vegetasi Tanaman
          </p>
          <h1 className="text-black font-bold text-2xl lg:text-4xl mt-2 text-left ml-10 max-w-lg">
            Menjual Berbagai Macam{" "}
            <span className="text-primary"> Vegetasi</span> Tanaman
          </h1>
        </div>
        {/* lokasi */}
        <div
          className="flex justify-start items-center gap-4 lg:gap-6 ml-10 mt-16"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="1200"
          data-aos-duration="900"
          data-aos-delay="250"
        >
          <img src={Lokasi} alt="Lokasi" />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
              Lokasi
            </h1>
            <p className="text-sm font-light lg:font-normal lg:text-base max-w-md">
              Telaga Sari, Kecamatan Balikpapan Selatan, Kota Balikpapan.
            </p>
          </div>
        </div>

        {/* Kualitas */}
        <div
          className="flex justify-end gap-4 lg:gap-6 items-center mr-10 mb-60"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="1200"
          data-aos-duration="900"
          data-aos-delay="250"
        >
          <img src={Kualitas} alt="Kualitas" />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
              Kualitas Unggul
            </h1>
            <p className="text-sm font-light lg:font-normal lg:text-base max-w-md">
              Tanaman-tanaman yang kami jual dipilih secara teliti untuk
              memastikan kualitas terbaik.
            </p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>

      {/* Dokumentasi */}
      <div className="relative pt-4 bg-primary mb-10">
        <h1 className="text-white font-bold text-2xl lg:text-4xl text-left ml-10 max-w-md">
          Dokumentasi Kegiatan Lebah Madu Karamunting
        </h1>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel leftControl="left" rightControl="right">
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;

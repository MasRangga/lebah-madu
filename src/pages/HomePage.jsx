import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection2 from "../assets/HeroSection2.png";
import Section2 from "../assets/Section2.png";
import { ImWhatsapp } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../components/Footer";

// Testimonial
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

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center ml-4 -mt-40 ">
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
              src={HeroSection2}
              alt="HeroSection2"
              className="w-full lg:w-auto"
            />
          </div>
        </div>
      </section>

      {/* Kenapa Karamunting */}
      <div className="mx-4 my-16">
        <div className="mb-8">
          {/* Heading */}
          <div
            className="flex flex-col gap-3 text-center"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="200"
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
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 mt-12">
            <div
              className="lg:w-1/2"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="320"
              data-aos-duration="900"
            >
              <img src={Section2} alt="section2" className="w-full lg:w-auto" />
            </div>
            <div className="flex flex-col gap-11 lg:w-1/2">
              <div
                className="flex gap-4 lg:gap-6 items-center"
                data-aos="fade-left"
                data-aos-offset="1200"
                data-aos-duration="900"
                data-aos-delay="150"
              >
                <img src={iconalamtest} alt="keindahanalam" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
                    Keindahan Alam
                  </h1>
                  <p className="text-sm font-light lg:font-normal lg:text-base">
                    Wisata Lebah Madu Karamunting: Keindahan alam dengan bunga
                    karamunting dan hutan hijau yang menenangkan.
                  </p>
                </div>
              </div>
              <div
                className="flex gap-4 lg:gap-6 items-center"
                data-aos="fade-left"
                data-aos-offset="1200"
                data-aos-duration="900"
                data-aos-delay="150"
              >
                <img src={iconbuku} alt="iconbuku" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
                    Pendidikan Tentang Lebah Madu
                  </h1>
                  <p className="text-sm font-light lg:font-normal lg:text-base">
                    Mempelajari segala hal tentang kehidupan lebah. Mulai dari
                    proses pembuatan madu, polinasi tumbuhan, hingga peran
                    penting lebah dalam ekosistem.
                  </p>
                </div>
              </div>
              <div
                className="flex gap-4 lg:gap-6 items-center"
                data-aos="fade-left"
                data-aos-offset="1200"
                data-aos-duration="900"
                data-aos-delay="150"
              >
                <img src={iconwisata} alt="iconwisata" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
                    Wisata Edukatif untuk Keluarga
                  </h1>
                  <p className="text-sm font-light lg:font-normal lg:text-base">
                    Bagi keluarga, Wisata Lebah Madu Karamunting adalah
                    destinasi yang sempurna. Anak-anak akan belajar tentang alam
                    sambil bersenang-senang.
                  </p>
                </div>
              </div>
              <div
                className="flex gap-4 lg:gap-6 items-center"
                data-aos="fade-left"
                data-aos-offset="1200"
                data-aos-duration="900"
                data-aos-delay="150"
              >
                <img src={iconmadu} alt="iconmadu" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold text-black lg:text-xl lg:font-bold">
                    Produk Madu Asli Berkualitas
                  </h1>
                  <p className="text-sm font-light lg:font-normal lg:text-base">
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
      <div className="relative pt-4 bg-secondary mb-10" data-aos="fade-down">
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
            Lokasi UMKM Vegetasi Tanaman
          </p>
          <h1 className="text-black font-bold text-2xl lg:text-4xl mt-2 text-left ml-10 max-w-lg">
            Menjual Berbagai Macam{" "}
            <span className="text-primary"> Vegetasi</span> Tanaman
          </h1>
        </div>
        {/* lokasi */}
        <div
          className="flex justify-start items-center gap-4 lg:gap-6 ml-10 my-10"
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

        {/* Lokasi */}
        <div className="card lg:card-side shadow-xl">
          <div className="my-2 w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.392073074615!2d144.95373631531695!3d-37.81627927975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c8d8650c72f7!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1574244772592!5m2!1sen!2sau"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, height: "450px" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={img_5}
              alt="slide_image"
              className="w-full object-cover"
              style={{ height: "450px" }}
            />
          </div>
        </div>
      </div>

      {/* Dokumentasi */}
      {/* <div className="my-16" data-aos="fade-up">
        <div
          className="flex flex-col gap-3 text-center"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <p className="text-primary font-poppins text-left ml-10">
            Dokumentasi
          </p>
          <h1 className="text-black font-bold text-2xl lg:text-4xl mt-2 text-left ml-10 max-w-lg">
            Dokumentasi Kegiatan{" "}
            <span className="text-primary"> Lebah Madu</span> Karamunting
          </h1>
        </div>
      </div> */}

      <Footer />
    </>
  );
};

export default HomePage;

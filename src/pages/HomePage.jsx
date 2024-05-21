
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

  );
};

export default HomePage;

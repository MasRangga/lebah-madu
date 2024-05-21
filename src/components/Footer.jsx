import CopyRight2 from "./CopyRight2";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = ({ linkRef, goto }) => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      // Tentukan batasan scroll di mana button harus muncul
      const threshold = documentHeight - windowHeight - 2000;

      // Tampilkan atau sembunyikan button berdasarkan batasan scroll
      setShowScrollToTop(scrollY > threshold);
    };

    // Tambahkan event listener untuk mendengarkan perubahan posisi scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    goto(linkRef.current);
  };

  return (
    <div className="container mx-auto">
      <div className="px-4 pt-7  bg-gray-100 bg-opacity-60 flex flex-col gap-6 lg:flex lg:flex-row lg:justify-center lg:items-end">
        {/* section samping kiri */}
        <div className="flex flex-col gap-6 lg:w-2/3 ">
          {/* logo */}
          <img
            src={fixlogomadu}
            alt="fixlogomadu"
            className="h-14 w-60 cursor-pointer"
            onClick={() => goto(linkRef.current)}
          />
          {/* deskripsi */}
          <p className="text-xs  font-light tracking-wide leading-6 lg:text-base lg:w-2/3">
            Kami mengembangkan teknologi yang memungkinkan peningkatan kesadaran
            dan pemahaman masyarakat tentang wisata Lebah Madu Karamunting.
          </p>
        </div>
        {/* section samping kanan */}
        <div className="flex flex-col gap-8">
          {/* menu footer */}
          <ul className="flex flex-row gap-4 lg:gap-8">
            <Link
              to={""}
              className="hover:text-primary cursor-pointer lg:text-lg"
            >
              About
            </Link>
            <Link
              to={""}
              className="hover:text-primary cursor-pointer lg:text-lg"
            >
              Plant
            </Link>
            <Link
              to={""}
              className="hover:text-primary cursor-pointer lg:text-lg"
            >
              Send Feedback
            </Link>
          </ul>
          <div className="h-px w-full bg-slate-600 lg:mb-4"></div>
          {/* hubungi kami */}
          <ul className="flex flex-row gap-5">
            <li>
              <FaInstagram className="w-6 h-6 text-primary hover:bg-green-500 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" />
            </li>
            <li>
              <FaFacebook className="w-6 h-6 text-primary hover:bg-green-500 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" />
            </li>
            <li>
              <BsTwitterX className="w-6 h-6 text-primary hover:bg-green-500 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" />
            </li>
            <li>
              <FaTiktok className="w-6 h-6 text-primary hover:bg-green-500 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" />
            </li>
            <li>
              <FaWhatsapp className="w-6 h-6 text-primary hover:bg-green-500 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" />
            </li>
          </ul>
        </div>

        {/* Button Scroll to Top */}
        {showScrollToTop && (
          <button
            className="fixed bottom-5 right-10 md:right-32 lg:right-10 bg-green-500 text-white rounded-full p-2 cursor-pointer hover:bg-green-700 animate-bounce"
            onClick={handleScrollToTop}
          >
            <IoArrowUp className="w-6 h-6" />
          </button>
        )}
        {/* CopyRight2 mode hp dan tablet */}
        <div className="flex justify-center lg:hidden">
          <CopyRight2 />
        </div>
      </div>
      {/* CopyRight2 mode > labtop */}
      <div className="hidden lg:flex bg-gray-100 bg-opacity-60 lg:justify-center lg:items-center lg:flex-col lg:pt-10">
        <div className="h-px w-2/3 bg-slate-700"></div>
        <CopyRight2 />
      </div>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  linkRef: PropTypes.object,
  goto: PropTypes.func,
};

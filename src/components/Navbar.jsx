import React, { useState } from "react";
import logomadu2 from "../assets/logomadu2.svg";
import hamburger from "../assets/hamburger.svg";
import Cancel from "../assets/Cancel.svg";
import { IoHomeOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { GoPeople } from "react-icons/go";
import { CgDetailsMore } from "react-icons/cg";

const Navbar = () => {
  const [showContactButton, setShowContactButton] = useState(false);
  const [showNavbarBottom, setShowNavbarBottom] = useState(true);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  // Logic handlebutton klik more open contact
  const handleMoreButtonClick = () => {
    setShowContactButton(!showContactButton);
  };

  // Logic handleHamburgerClick
  const handleHamburgerClick = () => {
    setShowNavbarBottom(!showNavbarBottom);
    setHamburgerClicked(!hamburgerClicked);
  };

  return (
    <nav className="py-9 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <img src={logomadu2} alt="logomadu" />
          {hamburgerClicked ? (
            <img src={Cancel} alt="cancel" onClick={handleHamburgerClick} />
          ) : (
            <img
              className="lg:hidden"
              src={hamburger}
              alt="hamburger"
              onClick={handleHamburgerClick}
            />
          )}

          {/* Desktop View Navbar */}
          <div className="hidden lg:block">
            <ul className="flex gap-16">
              <li className="text-gray-400 font-normal text-lg font-poppins opacity-50 hover:opacity-100 transform transition-transform hover:scale-105">
                <a
                  href=""
                  className="block p-2 rounded-full hover:bg-green-400 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li className="text-gray-400 font-normal text-lg font-poppins opacity-50 hover:opacity-100 transform transition-transform hover:scale-105">
                <a
                  href=""
                  className="block p-2 rounded-full hover:bg-green-400 hover:text-white"
                >
                  About
                </a>
              </li>
              <li className="text-gray-400 font-normal text-lg font-poppins opacity-50 hover:opacity-100 transform transition-transform hover:scale-105">
                <a
                  href=""
                  className="block p-2 rounded-full hover:bg-green-400 hover:text-white"
                >
                  Plant
                </a>
              </li>
              <li className="text-gray-400 font-normal text-lg font-poppins opacity-50 hover:opacity-100 transform transition-transform hover:scale-105">
                <a
                  href=""
                  className="block p-2 rounded-full hover:bg-green-400 hover:text-white"
                >
                  Send Feedback
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block">
            <button className="grow bg-green-400 px-4 py-4 font-bold text-white rounded-full text-sm transition-all hover:bg-green-500">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View Navbar */}
      {showNavbarBottom && (
        <div className="fixed bottom-0 right-0 left-0 bg-white p-4 border lg:hidden">
          <ul className="flex justify-between">
            {/* Home */}
            <li>
              <button className="flex justify-center flex-col items-center gap-1"></button>
              <div className="text-green-400 text-2xl flex items-center justify-center">
                <IoHomeOutline />
              </div>
              <span className="text-base font-bold text-green-400">Home</span>
            </li>
            {/* About */}
            <li>
              <button className="flex justify-center flex-col items-center gap-1"></button>
              <div className=" text-gray-400 opacity-50 text-2xl flex items-center justify-center">
                <GoPeople />
              </div>
              <span className="text-gray-400 opacity-50 text-base font-normal">
                About
              </span>
            </li>
            {/* Tanaman */}
            <li>
              <button className="flex justify-center flex-col items-center gap-1"></button>
              <div className=" text-gray-400 opacity-50 text-2xl flex items-center justify-center">
                <PiPlant />
              </div>
              <span className="text-gray-400 opacity-50 text-base font-normal">
                Plant
              </span>
            </li>
            {/* FeedBack */}
            <li>
              <button className="flex justify-center flex-col items-center gap-1"></button>
              <div className="text-gray-400 opacity-50 text-2xl flex items-center justify-center">
                <GoCommentDiscussion />
              </div>
              <span className="text-gray-400 opacity-50 text-base font-normal">
                Send Feedback
              </span>
            </li>
            {/* More */}
            <li>
              <button
                className="flex justify-center flex-col items-center"
                onClick={handleMoreButtonClick}
              >
                <div className="text-gray-400 opacity-50 text-2xl flex items-center justify-center">
                  <CgDetailsMore />
                </div>
                <span className="text-gray-400 opacity-50 text-base font-normal">
                  More
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Tombol Contact Me */}
      <div
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4 ${
          showContactButton
            ? "transition ease-out duration-300 opacity-100 scale-100"
            : "transition ease-in duration-300 opacity-0 scale-90 hidden"
        }`}
      >
        <button className="grow bg-green-400 px-4 py-4 font-bold text-white rounded-full text-lg font-poppins transition-all hover:bg-green-500">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

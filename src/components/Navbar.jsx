import React from "react";
import Iconss from "../assets/Iconss.svg";
import hamburger_menu_active from "../assets/hamburger_menu_active.svg";

const Navbar = () => {
  return (
    <nav className="bg-blue-100">
      <div className="container mx-auto px-4 flex justify-between py-[22px] items-center">
        <div>
          <img src={Iconss} alt="iconss" />
        </div>
        <div>
          <img src={hamburger_menu_active} alt="hamburger_menu_active" />
        </div>
        <div>
          <ul className="flex space-x-4 text-lg bg-red-200">
            <li className="bg-black px-4 py-2 text-white">Home</li>
            <li className="bg-black px-4 py-2 text-white">Tentang Kami</li>
            <li className="bg-black px-4 py-2 text-white">Tanaman</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

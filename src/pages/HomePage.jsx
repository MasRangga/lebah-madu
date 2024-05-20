
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section>
        <div className="container mx-auto px-4 py-28">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4 order-2">
              <div>
                <button className="px-8 py-4 bg-primary text-white flex gap-2 text-sm font-bold drop-shadow-sm-shadow rounded-full mx-auto">
                  Explore Madu
                  <img src="" alt="" />
                </button>
                <button className="px-8 py-4 bg-primary text-white flex gap-2 text-sm font-bold drop-shadow-sm-shadow rounded-full mx-auto">
                  Explore Madu
                  <img src="" alt="" />
                </button>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

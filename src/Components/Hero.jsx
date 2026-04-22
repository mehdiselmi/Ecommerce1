import React from "react";
import photo1 from "../assets/photo1.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="h-dvh pt-28 flex justify-between items-center px-10">
      <div className="">
        <h1 className="font-semibold text-6xl leading-16">
          Timeless <br /> Elegance
        </h1>
        <p className="text-gray-700 font-medium text-xl py-10 w-120">
          Discover our carefully curated collection of minimalist designs that
          transcend seasons and trends.
        </p>
        <div className="flex gap-5 items-center">
          <Link to="/Collections">
            {" "}
            <button className="hover:bg-gray-900 text-left bg-black text-white font-semibold pl-10 py-3 rounded-lg pr-25">
              EXPLOR <br /> COLLECTIONS
            </button>
          </Link>
          <Link to="/About">
            <button className="hover:bg-gray-50 font-semibold border-neutral border px-8 p-6 rounded-lg">
              LOOKBOOK
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <img
          src={photo1}
          alt="photo plant"
          className="w-130 h-140 rounded-lg"
        />
        <div className="text-black flex justify-center items-center bg-white rounded-lg  absolute -bottom-7 -left-6 shadow-2xl  w-40 h-25">
          <p>
            NEW ARRIVALS <br />{" "}
            <span className="font-semibold text-xl">Spring '25</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

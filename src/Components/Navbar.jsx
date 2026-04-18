import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 z-50 bg-white/30 backdrop-blur-3xl w-full  shadow-md flex justify-between mt-2 py-3 items-center border-neutral  px-10 border border-l-0 border-r-0">
      <Link to="/"><h1 className="font-medium text-3xl">ATELIER</h1></Link>

      <ul className="flex items-center font-mono   gap-10">
        <Link to="/Women">
          <li className="cursor-default hover:text-gray-600">WOMEN</li>
        </Link>
        <Link to="/Men">
          <li className="cursor-default hover:text-gray-600">MEN</li>
        </Link>
        <Link to="/Collections">
          <li className="cursor-default hover:text-gray-600">COLLECTIONS</li>
        </Link>
        <Link to="/About">
          <li className="cursor-default hover:text-gray-600">ABOUT</li>
        </Link>
      </ul>

      <div className="flex items-center gap-4  text-2xl">
        <IoIosSearch />
        <FaRegUser />
        <MdOutlineShoppingBag />
      </div>
    </div>
  );
};

export default Navbar;

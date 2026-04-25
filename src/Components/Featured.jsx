import React from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="mt-42 ">
      <div className="text-center">
        <h1 className="text-3xl pb-3.5 font-semibold">Featured Pieces</h1>
        <p className="">
          Essential designs crafted with attention to detail and sustainable <br />
          materials
        </p>

         <div className="grid grid-cols-3 gap-6 mt-20 px-6">
      <Link to="/men" className="border p-4 rounded shadow hover:shadow-lg">
        <img src="/images/men.jpg" alt="Men" className="h-40 mx-auto" />
        <h2 className="text-lg font-semibold text-center mt-2">Men</h2>
      </Link>

      <Link to="/women" className="border p-4 rounded shadow hover:shadow-lg">
        <img src="/images/women.jpg" alt="Women" className="h-40 mx-auto" />
        <h2 className="text-lg font-semibold text-center mt-2">Women</h2>
      </Link>

      <Link to="/collections" className="border p-4 rounded shadow hover:shadow-lg">
        <img src="/images/collections.jpg" alt="Collections" className="h-40 mx-auto" />
        <h2 className="text-lg font-semibold text-center mt-2">Collections</h2>
      </Link>
    </div>
      </div>
    </div>
  );
};

export default Featured;

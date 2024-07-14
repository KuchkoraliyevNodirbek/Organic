import React from "react";
import Img from "./about-us.png";
import { Link } from "react-router-dom";

export const AboutUs = () => {
  return (
    <div className="container flex items-center pt-[100px] pb-[100px] mx-auto">
      <div className="flex-1">
        <img src={Img} alt="About Us" className="max-w-full h-auto" />
      </div>
      <div className="flex-1 pl-10">
        <h2 className="text-green-600 font-semibold mb-4">About Us</h2>
        <h1 className="text-4xl font-bold text-primary mb-6">
          We Believe in Working <br /> Accredited Farmers
        </h1>
        <p className="text-gray-700 mb-6">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to be the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley.
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Organic Foods Only</h3>
          <p className="text-gray-700">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Quality Standards</h3>
          <p className="text-gray-700">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>
        </div>
        <Link to={"/shop"}>
          <button className="bg-primary text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-secondary transition duration-300 ease-in-out">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

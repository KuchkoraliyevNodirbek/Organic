import React from "react";
import bgCard from "./bgCard.png";

export const News = () => {
  return (
    <div
      className="bg-white p-8 rounded-lg  container mx-auto pt-[100px]"
      style={{ maxWidth: "1000px" }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-green-700">News</h2>
        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-full">
          More News
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6">
        Discover weekly content about organic food, & more
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img
            src={bgCard}
            alt="Card Background"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-white p-2 rounded-full text-center">
            <span className="text-sm font-bold text-gray-700">25</span>
            <br />
            <span className="text-xs text-gray-500">Nov</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <span className="text-yellow-600">&#x1F464;</span>
              <span className="text-gray-700 ml-2">By Rachi Card</span>
            </div>
            <h2 className="text-lg font-semibold">
              The Benefits of Vitamin D & How to Get It
            </h2>
            <p className="text-gray-500 text-sm">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <button className="mt-2 text-yellow-600 font-semibold flex items-center">
              Read More <span className="ml-1">&#x27A4;</span>
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={bgCard}
            alt="Card Background"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-white p-2 rounded-full text-center">
            <span className="text-sm font-bold text-gray-700">25</span>
            <br />
            <span className="text-xs text-gray-500">Nov</span>
          </div>
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <span className="text-yellow-600">&#x1F464;</span>
              <span className="text-gray-700 ml-2">By Rachi Card</span>
            </div>
            <h2 className="text-lg font-semibold">
              Our Favourite Summertime Tommeto
            </h2>
            <p className="text-gray-500 text-sm">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
            <button className="mt-2 text-yellow-600 font-semibold flex items-center">
              Read More <span className="ml-1">&#x27A4;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

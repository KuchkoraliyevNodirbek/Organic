import React from "react";
import AboutImage from "./About.png"; // Ensure this path is correct

export const AboutAboutUS = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center py-16 px-4 md:px-0">
      <div className="md:w-1/2">
        <img src={AboutImage} alt="About Us" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
        <h3 className="text-green-600 font-semibold mb-2">About Us</h3>
        <h2 className="text-3xl font-bold mb-4">
          We do Creative Things for Success
        </h2>
        <p className="text-gray-600 mb-4">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <p className="text-gray-600 mb-4">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="flex flex-wrap mb-4">
          <div className="flex items-center mr-6 mb-4 md:mb-0">
            <span>Modern Agriculture Equipment</span>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <span>No growth hormones are used</span>
          </div>
        </div>
        <button className="bg-blue-900 text-white py-2 px-4 rounded-lg">
          Explore More
        </button>
      </div>
    </section>
  );
};

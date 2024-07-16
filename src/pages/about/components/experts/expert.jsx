import React from "react";
import ExpertGirl from "./expertGirl.png";

export const Expert = () => {
  return (
    <div className="experts container mx-auto mt-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Our Organic Experts</h1>
        <p className="text-gray-600">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="expert-card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="expert-img">
              <img src={ExpertGirl} alt="Expert" className="w-full" />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Cynthia Johnson</h2>
              <div className="text-gray-600 mb-4">Organic Expert</div>
              <div className="social-card flex space-x-4">
                <a href="#" className="text-blue-500">
                  Facebook
                </a>
                <a href="#" className="text-blue-400">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

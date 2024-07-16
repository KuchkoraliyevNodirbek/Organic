import React from "react";
import rightImg from "./Choose.png";
import cardIcon from "./cardIcon.png";

const Choose = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap justify-center mt-8 gap-8">
        <div className="flex items-center w-full md:w-auto">
          <div className="mr-8">
            <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
            <p className="mb-4">
              We do not buy from the open market & traders.
            </p>
            <div className="flex items-center mb-4">
              <img src={rightImg} className="h-6 mr-2" alt="100% Natural" />
              <p>100% Natural Product</p>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={rightImg}
                className="h-6 mr-2"
                alt="Increases resistance"
              />
              <p>Increases resistance</p>
            </div>
          </div>
          <div className=" rounded-[10px]">
            <img
              src={rightImg}
              alt="Choose"
              className="max-w-xs  rounded-[10px]"
            />
          </div>
        </div>
      </div>

      {/* sff */}

      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="card p-4 bg-white shadow-md">
          <div className="flex items-center">
            <img src={cardIcon} className="h-6 mr-2" alt="Return Policy" />
            <h2 className="text-lg font-bold">Return Policy</h2>
          </div>
          <p className="mt-2">We offer a comprehensive return policy.</p>
        </div>
        <div className="card p-4 bg-white shadow-md">
          <div className="flex items-center">
            <img src={cardIcon} className="h-6 mr-2" alt="100% Fresh" />
            <h2 className="text-lg font-bold">100% Fresh</h2>
          </div>
          <p className="mt-2">Our products are guaranteed to be fresh.</p>
        </div>
        <div className="card p-4 bg-white shadow-md">
          <div className="flex items-center">
            <img src={cardIcon} className="h-6 mr-2" alt="Support 24/7" />
            <h2 className="text-lg font-bold">Support 24/7</h2>
          </div>
          <p className="mt-2">We provide support around the clock.</p>
        </div>
        <div className="card p-4 bg-white shadow-md">
          <div className="flex items-center">
            <img src={cardIcon} className="h-6 mr-2" alt="Secured Payment" />
            <h2 className="text-lg font-bold">Secured Payment</h2>
          </div>
          <p className="mt-2">Your payments are secure with us.</p>
        </div>
      </div>
    </div>
  );
};

export default Choose;

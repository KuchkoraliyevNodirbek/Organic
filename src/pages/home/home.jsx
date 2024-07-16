import React from "react";
import Img1 from "../../assets/banner-img/1.png";
import Img2 from "../../assets/banner-img/2.png";
import { AboutUs } from "../../components/About-us/about-us";
import { ProductData } from "../../components/productData";
import { Offer } from "../../components/offer/offerProduct";
import { News } from "../../components/newDiscover";
import { Footer } from "../../components/footer/footer";

export const Home = () => {
  return (
    <>
      <div className="bg-homebanner bg-cover bg-center w-full h-[75vh] mt-[30px]">
        <div className="container-screen text-left pt-[180px] max-w-[500px] pl-[150px]">
          <p className="text-green-600 font-semibold mb-4">100% Natural Food</p>
          <h1 className="text-5xl font-bold text-primary mb-6">
            Choose the best healthier way of life
          </h1>
          <button className="bg-accent text-primary font-medium py-3 px-8 rounded-full shadow-md hover:bg-yellow-500 transition duration-300 ease-in-out">
            Explore Now
          </button>
        </div>
      </div>
      <div className="container pt-[100px] pb-[100px]">
        <div className="flex justify-between gap-32 ">
          <div>
            <img src={Img1} alt="banner-img" />
          </div>
          <div>
            <img src={Img2} alt="banner-img" />
          </div>
        </div>
      </div>
      <AboutUs />
      <ProductData />
      <Offer />
      <News />
      <Footer />
    </>
  );
};

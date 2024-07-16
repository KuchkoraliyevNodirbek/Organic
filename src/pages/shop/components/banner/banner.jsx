import React from "react";
import Bannerlogo from "./Bannerlogo.png";
import { ProductData } from "../../../../components/productData";
import { Footer } from "../../../../components/footer/footer";

export const Banner = () => {
  return (
    <>
      <div className="banner-shop ">
        <div className="banner-img">
          <img src={Bannerlogo} alt="" />
        </div>
      </div>
      <div className="shops container">
        <ProductData />
        <Footer />
      </div>
    </>
  );
};

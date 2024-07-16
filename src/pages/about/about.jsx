import React from "react";
import { BannerAbout } from "./components/about-banner";
import { AboutAboutUS } from "./components/about-aboutUs/about-AboutUS";
import Choose from "./components/about-choose/choose";
import { Expert } from "./components/experts/expert";
import { Offer } from "../../components/offer/offerProduct";
import { Footer } from "../../components/footer/footer";

export const About = () => {
  return (
    <div>
      <BannerAbout />
      <AboutAboutUS />
      <Choose />
      <Expert />
      <Offer />
      <Footer />
    </div>
  );
};

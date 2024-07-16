import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import BgFooter from "./Background.png"; // Ensure this path is correct
import Logo from "../../assets/navbar-icons/logo"; // Ensure this path is correct

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 container pt-[100px]">
      <div
        className="bg-cover bg-center text-white p-10 rounded-t-lg"
        style={{ backgroundImage: `url(${BgFooter})` }}
      >
        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-1 p-3 rounded-l-lg outline-none text-gray-700"
          />
          <button className="bg-blue-900 p-3 rounded-r-lg">Subscribe</button>
        </div>
      </div>
      <div className="container mx-auto py-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: needhelp@organia.com</p>
            <p>Phone: 666 888 888</p>
            <p>Address: 88 road, brooklyn street, USA</p>
          </div>
          <div className="mb-6 md:mb-0 text-center md:w-1/3">
            <div className="flex justify-center items-center mb-2">
              <Logo />
            </div>
            <p className="w-[350px] mr-auto ml-auto">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className="flex justify-center mt-4">
              <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
                <FontAwesomeIcon icon={faPinterest} size="2x" />
              </a>
            </div>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Utility Pages</h3>
            <p>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Style Guide
              </a>
            </p>
            <p>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                404 Not Found
              </a>
            </p>
            <p>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Password Protected
              </a>
            </p>
            <p>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Licences
              </a>
            </p>
            <p>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Changelog
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        <p>
          Copyright © Organick | Designed by VictorFlow Templates - Powered by
          Webflow
        </p>
      </div>
    </footer>
  );
};

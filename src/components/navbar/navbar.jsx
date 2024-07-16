import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/navbar-icons/logo";
import Korzinka from "../../assets/navbar-icons/korzinka";
import SearchIcon from "../../assets/navbar-icons/search-icon";

export const Navbar = () => {
  return (
    <div className="navbar container mx-auto flex items-center justify-between py-4">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="links flex space-x-6 gap-[50px]">
        <Link to="/" className="text-gray-800 hover:text-primary">
          Home
        </Link>
        <Link to="/about" className="text-gray-800 hover:text-primary">
          About
        </Link>
        <Link to="/shop" className="text-gray-800 hover:text-primary">
          Shop
        </Link>
        {/* <Link to="/shop-single" className="text-gray-800 hover:text-primary">
          ShopSingle
        </Link> */}
        {/* <Link to="/prduct-detail" className="text-gray-800 hover:text-primary">
          ProductDetail
        </Link> */}
      </div>
      <div className="korzinka flex space-x-4">
        <button>
          <SearchIcon className="text-gray-800 hover:text-primary" />
        </button>
        <button>
          <Korzinka className="text-gray-800 hover:text-primary" />
        </button>
      </div>
    </div>
  );
};

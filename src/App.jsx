import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Shop } from "./pages/shop";
import { ShopSingle } from "./pages/shop-single";
import { ProductDetail } from "./pages/product-detail";
import { Offer } from "./components/offer";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/shop-single/:id" element={<ShopSingle />} />
      </Routes>
    </div>
  );
};

export default App;

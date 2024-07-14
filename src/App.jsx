import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Shop } from "./pages/shop";
import { ShopSingle } from "./pages/shop-single";
import { ProductDetail } from "./pages/product-detail";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/prduct-detail/" element={<ProductDetail />} />
        <Route path="/shop-single/:id" element={<ShopSingle />} />
      </Routes>
    </div>
  );
};

export default App;

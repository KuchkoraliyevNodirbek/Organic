import React from "react";
import { product as Productbase } from "../../product-data/productData"; // Import your product data
import { useParams } from "react-router-dom";
import { ProductDetail } from "../product-detail";

export const ShopSingle = () => {
  const { id } = useParams();

  const product = Productbase.find((prod) => prod.id === id);

  if (!product) {
    return (
      <div>
        <ProductDetail />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-4xl font-bold mb-10">{product.name}</h2>
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {product.category}
            </span>
            <span className="text-yellow-500">
              {"★".repeat(product.rating)}{" "}
              {/* Assuming product.rating is a number */}
            </span>
          </div>
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-60 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="line-through text-gray-500">
              ${product.originalPrice}
            </span>
            <span className="text-green-600 font-bold">
              ${product.currentPrice}
            </span>
          </div>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

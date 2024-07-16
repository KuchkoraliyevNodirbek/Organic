import React from "react";
import { Link } from "react-router-dom";
import { productData as Productbase2 } from "../../offerData/offer"; // Adjust the import path as necessary

export const Offer = () => {
  return (
    <div className="bg-teal-900 py-16">
      <div className="container mx-auto text-center mb-10">
        <span className="text-green-300 text-lg italic">Offer</span>
        <h2 className="text-4xl font-bold text-white">
          We Offer Organic For You
        </h2>
      </div>
      <div className="container mx-auto flex justify-center flex-wrap gap-6">
        {Productbase2.map((product) => (
          <Link
            to={`/product-detail/${product.id}`}
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md w-[250px] hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {product.category}
              </span>
              <span className="text-yellow-500">
                {"★".repeat(product.rating)}
              </span>
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="line-through text-gray-500">
                ${product.originalPrice.toFixed(2)}
              </span>
              <span className="text-green-600 font-bold">
                ${product.currentPrice.toFixed(2)}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

import React from "react";
import { product as Productbase } from "../../product-data/productData";
import { Link } from "react-router-dom";

export const ProductData = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-4xl font-bold mb-10">
        <span className="text-green-600">Categories</span> <br />
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Productbase.map((product) => (
          <Link key={product.id} to={`/shop-single/${product.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-md w-[250px]">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
                <span className="text-yellow-500">
                  {"★".repeat(product.rating.length)}
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
                  ${product.originalPrice}
                </span>
                <span className="text-green-600 font-bold">
                  ${product.currentPrice}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-primary text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-secondary transition duration-300 ease-in-out">
          Load More
        </button>
      </div>
    </div>
  );
};

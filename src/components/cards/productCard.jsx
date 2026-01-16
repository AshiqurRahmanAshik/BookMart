import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.title}
      className="bg-base-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={300}
        className="w-full h-64 object-cover"
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between h-64">
        <div>
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-2 line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className="mt-2 flex items-center justify-between">
          {/* Price & Discount */}
          <div>
            <span className="font-bold text-primary">${product.price}</span>
            {product.discount && (
              <span className="text-sm text-success ml-2">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Ratings */}
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">
              {"★".repeat(Math.round(product.ratings))}
            </span>
            <span className="text-gray-600 text-sm">{product.ratings}</span>
          </div>
        </div>

        {/* Buy Button */}
        <button className="btn btn-primary btn-sm w-full mt-3">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;

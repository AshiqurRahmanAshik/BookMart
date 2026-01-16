import React from "react";
import products from "@/data/products.json";
import ProductCard from "../cards/productCard";

const Products = () => {
  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">
          Featured Books
        </h1>

        {/* Product Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.title}>
              {" "}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

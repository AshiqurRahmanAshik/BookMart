import React from "react";
import { getProducts } from "@/actions/server/product"; // ✅ named import
import ProductCard from "../../components/cards/productCard";

const Products = async () => {
  let products = [];

  try {
    products = await getProducts();
    console.log("Products fetched:", products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-xl font-semibold">
          No products found in the database!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-bold mb-12">Our Products</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

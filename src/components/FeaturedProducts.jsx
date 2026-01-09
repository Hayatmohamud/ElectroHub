import React, { useState } from "react";
import ProductCard from "./ProductCard";

import { products as allProducts } from "../data/products";

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Helitaanka Categories-ka si dynamic ah
  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  // Logic-ga lagu sifeeyo badeecadaha (Filter Logic)
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts.slice(0, 8)
      : allProducts.filter((p) => p.category === selectedCategory).slice(0, 8);

  return (
    <section className="py-20 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-500 font-medium uppercase tracking-wider text-sm">
            Featured Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
            Best Sellers
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Explore our most popular electronics loved by thousands of customers
            worldwide.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories
            .filter((c) => c !== "Accessories")
            .map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="transform transition-all duration-500 hover:-translate-y-2"
              style={{
                animation: "slideUp 0.5s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
             
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

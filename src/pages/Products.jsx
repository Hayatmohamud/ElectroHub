import React, { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    // MUHIIM: bg-white dark:bg-[#020617]
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Products</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Explore our complete collection
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-xl outline-none text-slate-900 dark:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-xl outline-none text-slate-900 dark:text-white"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;

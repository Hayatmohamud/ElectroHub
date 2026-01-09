import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ allProducts }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = allProducts?.find((p) => String(p.id) === id);
    setProduct(foundProduct);
    window.scrollTo(0, 0);
  }, [id, allProducts]);

  if (!product)
    return <div className="p-20 text-center font-bold">Loading Product...</div>;

  // Halkan waxaan ku dhisaynaa Features dynamic ah maadaama aysan xogtaada ku jirin
  const dynamicFeatures = [
    `High-performance ${product.title} with latest technology`,
    `Premium ${product.category} build quality and materials`,
    "Ergonomic design for professional and personal use",
    "Energy efficient performance and long battery life",
    "Comprehensive warranty and after-sales support",
    "Optimized for speed and seamless multitasking",
  ];

  const dynamicSpecs = {
    Category: product.category,
    Model: product.title.split(" ").slice(-1)[0], // Waxuu soo qabanayaa ereyga u dambeeya magaca
    Rating: `${product.rating} / 5.0 Stars`,
    Availability: "In Stock",
    Shipping: "Free Delivery",
    Condition: "Brand New",
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-500 mb-10 font-bold transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>

        {/* Top Section: Image & Main Info */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="bg-slate-50 dark:bg-white/5 rounded-[48px] p-12 flex items-center justify-center border border-slate-100 dark:border-white/10">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[400px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sky-500 font-black tracking-widest text-xs uppercase mb-3">
              {product.category}
            </span>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              {product.title}
            </h1>

            <div className="text-5xl font-black text-slate-900 dark:text-white mb-8">
              ${product.price}
            </div>

            <div className="flex gap-4 mb-10">
              <div className="flex items-center bg-slate-100 dark:bg-white/5 rounded-2xl p-1 border border-slate-200 dark:border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 font-bold text-xl"
                >
                  -
                </button>
                <span className="w-12 text-center font-black text-xl">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 font-bold text-xl"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-sky-500 hover:bg-sky-400 text-white font-black rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-sky-500/30 transition-all active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Features & Specifications (Sida sawirkii aad soo dirtay) */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Features */}
          <div className="bg-slate-50 dark:bg-white/5 p-12 rounded-[48px] border border-slate-100 dark:border-white/10 shadow-sm">
            <h2 className="text-3xl font-black mb-10">Features</h2>
            <ul className="space-y-6">
              {dynamicFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 text-slate-600 dark:text-slate-400 font-bold text-lg"
                >
                  <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-slate-50 dark:bg-white/5 p-12 rounded-[48px] border border-slate-100 dark:border-white/10 shadow-sm">
            <h2 className="text-3xl font-black mb-10">Specifications</h2>
            <div className="space-y-8">
              {Object.entries(dynamicSpecs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-5 last:border-0"
                >
                  <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                    {key}
                  </span>
                  <span className="font-black text-slate-900 dark:text-white text-lg">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

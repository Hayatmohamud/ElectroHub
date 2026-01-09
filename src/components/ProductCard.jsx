import { Link } from "react-router-dom";
import Rating from "./Rating.jsx";
import { useCart } from "../context/CartContext.jsx"; // 1. Soo dhex geli CartContext

export default function ProductCard({ product }) {
  const { addToCart } = useCart(); // 2. Ka soo bixi function-ka addToCart

  const {
    id,
    title = "No title available",
    image = "https://via.placeholder.com/300",
    category = "Uncategorized",
    price = 0,
    oldPrice,
    discount,
    rating = 0,
  } = product;

  // Function-ka xallinaya marka badhanka la riixo
  const handleAddToCart = (e) => {
    e.preventDefault(); // Si uusan Link-gu u kicin marka badhanka la riixo
    addToCart(product);
  };

  return (
    <div
      className="group rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 overflow-hidden
      shadow-lg shadow-slate-200/60 dark:shadow-none hover:-translate-y-1"
    >
      <div className="relative p-5">
        {/* Discount Label */}
        {typeof discount === "number" && (
          <div className="absolute left-7 top-7 z-10 rounded-full bg-sky-500 text-white dark:text-slate-950 text-[10px] font-black px-3 py-1 uppercase shadow-lg shadow-sky-500/20">
            -{discount}%
          </div>
        )}

        {/* Product image wrapper */}
        <div className="rounded-2xl bg-slate-100 dark:bg-slate-900/40 border border-slate-100 dark:border-white/5 p-4 flex items-center justify-center aspect-square">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Category */}
        <div className="mt-5 text-[10px] font-bold tracking-[0.2em] text-sky-500 uppercase">
          {category}
        </div>

        {/* Title */}
        <Link to={`/product/${id}`} className="block mt-2">
          <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white/90 group-hover:text-sky-500 transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-3">
          <Rating value={rating} />
        </div>

        {/* Pricing & Button */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">
              ${price}
            </div>
            {oldPrice && (
              <div className="text-sm text-slate-400 line-through decoration-red-500/50">
                ${oldPrice}
              </div>
            )}
          </div>

          {/* BADHANKA CART-KA (Hadda wuu shaqaynayaa) */}
          <button
            onClick={handleAddToCart} // 3. Halkan ku dar function-ka
            className="h-12 w-12 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white dark:text-slate-950 grid place-items-center transition-all shadow-lg shadow-sky-500/20 active:scale-90"
            type="button"
            aria-label="Add to cart"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

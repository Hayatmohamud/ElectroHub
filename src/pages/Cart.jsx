import React from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  // 1. Halkaan ku dar 'placeOrder' oo aan Context-ga ka soo qaadnay
  const { cart, removeFromCart, updateQuantity, totalPrice, placeOrder } =
    useCart();
  const navigate = useNavigate();

  // 2. Function-ka xallinaya iibsashada
  const handleCheckout = () => {
    const success = placeOrder(); // Waxay alaabta u wareejinaysaa Orders-ka Dashboard-ka
    if (success) {
      alert("Dalabkaaga waa la gudbiyey! Hubi Dashboard-kaaga.");
      navigate("/dashboard"); // Wuxuu kuu kaxaynayaa Dashboard-ka si aad u arko dynamic order-ka
    }
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <ShoppingBag size={80} className="text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-700">
          Your Cart is empty
        </h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 text-sky-500 font-bold underline"
        >
          go shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-black mb-8">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-white/5"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain bg-slate-100 rounded-lg"
              />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sky-500 font-bold">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-900 dark:text-white">
              <div className="flex items-center border rounded-lg overflow-hidden border-slate-200 dark:border-white/10">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 font-bold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:bg-red-50 p-2 rounded-lg"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t border-slate-200 dark:border-white/10 pt-6 flex justify-between items-center text-slate-900 dark:text-white">
        <p className="text-xl font-bold">
          Total Price: <span className="text-sky-500">${totalPrice}</span>
        </p>
        {/* 3. Ku dar 'onClick={handleCheckout}' badhanka hoose */}
        <button
          onClick={handleCheckout}
          className="bg-sky-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/20 active:scale-95"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

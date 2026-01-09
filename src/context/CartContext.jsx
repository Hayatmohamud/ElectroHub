import React, { createContext, useState, useContext, useEffect } from "react";
import { products as initialProducts } from "../data/products";
import { useAuth } from "./AuthContext"; // 1. SOO DHOWEYSO AUTHCONTEXT

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth(); // 2. KA SOO BIXI USER-KA HADDA JOOGA

  // Cart State
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Orders State
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  // 3. AUTO-CLEAR LOGIC (Halkan ayaa muhiim ah)
  useEffect(() => {
    if (!user) {
      // Haddii qofku Logout dhaho, faaruqi wax kasta
      setCart([]);
      setOrders([]);
      localStorage.removeItem("cart");
      localStorage.removeItem("orders");
    }
  }, [user]); // Mar kasta oo user-ku isbeddelo ayuu shaqaynayaa

  useEffect(() => {
    // Kaliya kaydi haddii uu user jiro
    if (user) {
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, [cart, orders, user]);

  // ... inta kale ee function-nadaada (addToCart, removeFromCart, iwm) siday ahaayeen u daa ...
  const addToCart = (product) => {
    setCart((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const placeOrder = () => {
    if (cart.length === 0) return false;
    const newOrder = {
      id: `#ORD-${Math.floor(Math.random() * 90000) + 10000}`,
      product:
        cart.length > 1
          ? `${cart[0].title} +${cart.length - 1}`
          : cart[0].title,
      amount: cart.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      ),
      date: new Date().toLocaleDateString(),
      status: "Delivered",
    };
    setOrders([newOrder, ...orders]);
    setCart([]);
    return true;
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const filteredProducts = initialProducts.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        placeOrder,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        totalItems: cart.length,
        searchTerm,
        setSearchTerm,
        filteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export default CartProvider;

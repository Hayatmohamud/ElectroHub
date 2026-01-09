import { createContext, useState, useContext, useEffect } from "react";
import { products as initialProducts } from "../data/products";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // 1. Cart State
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 2. Orders State (Halkan ayay ka imaanayaan Recent Orders-ka Dashboard-ka)
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  // Mar kasta oo cart ama orders isbeddelaan, ku keydi LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [cart, orders]);

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

  // 3. FUNCTION-KA IIBSASHADA (Checkout)
  // Kan ayaad ka soo wacaysaa badhanka Checkout ee bogga Cart-ka
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
      status: "Delivered", // Maadaama aysan payment API jirin, toos ayaan Delivered uga dhigaynaa
    };

    setOrders([newOrder, ...orders]); // Ku dar liiska hore ee Orders-ka
    setCart([]); // Faaruji Cart-ka maadaama la iibsaday
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
        orders, // Kan ku dar value-ga
        placeOrder, // Kan ku dar value-ga
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

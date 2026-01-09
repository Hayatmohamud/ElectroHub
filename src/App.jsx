import React from "react"; // Ku dar xariiqdan
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/FAQ.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { useTheme } from "./context/ThemeContext.jsx"; // Soo dhoofiso useTheme
import Login from "./pages/Login";
import { products } from "./data/products.js";
import Dashboard from "./pages/Dashboard.jsx";
import Cart from "./pages/Cart.jsx";

export default function App() {
  const { theme } = useTheme(); // Ka soo saar theme-ka hadda jira (light ama dark)

  return (
    /* Div-kan ayaa xakameynaya midabka guud ee App-ka oo dhan */
    <div
      className={`${theme} min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-300`}
    >
      <Routes>
        {/* RootLayout wuxuu dambiil u yahay dhamaan Routes-ka hoos yimaada */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* Protected Routes: Kuwa u baahan Login */}
          <Route path="/products" element={<Products />} />

          <Route
            path="/product/:id"
            element={<ProductDetails allProducts={products} />}
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

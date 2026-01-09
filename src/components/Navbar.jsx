import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User, Menu, X, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // --- 1. FUNCTION-KA LOGOUT-KA OO LEH REDIRECT ---
  const handleLogout = () => {
    logout(); // Faaruqi xogta AuthContext
    navigate("/"); // U ridi bogga Home si toos ah
    setIsOpen(false); // Xir menu-ga haddii uu mobile yahay
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/90 border-b border-slate-200 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* --- BIDIX: Logo iyo Hamburger --- */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="h-8 w-8 rounded-lg bg-sky-500 grid place-items-center text-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
              </svg>
            </div>
            <span className="font-bold text-slate-900 dark:text-white hidden sm:block">
              ElectroHub
            </span>
          </div>
        </div>

        {/* --- DHEXDA: Links (Desktop) --- */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sky-500"
                    : "text-slate-500 dark:text-slate-400 hover:text-sky-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* --- MIDIG: Actions --- */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-yellow-400"
          >
            {theme === "dark" ? (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Cart */}
          <div
            className="relative cursor-pointer p-2"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCart
              size={20}
              className="text-slate-600 dark:text-white"
            />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>

          {/* User / Logout */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/dashboard")}
                className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-lg transition-transform active:scale-90"
              >
                <User size={16} />
              </button>
              {/* --- 2. LOGOUT DESKTOP --- */}
              <button
                onClick={handleLogout}
                className="hidden sm:flex p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-sky-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-sky-400 transition-all"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-white dark:bg-slate-900 border-b dark:border-white/5 overflow-hidden ${
          isOpen ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold text-slate-600 dark:text-slate-300"
            >
              {link.name}
            </NavLink>
          ))}
          {isAuthenticated && (
            /* --- 3. LOGOUT MOBILE --- */
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-500 font-bold border-t dark:border-white/5 pt-4"
            >
              <LogOut size={18} /> Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

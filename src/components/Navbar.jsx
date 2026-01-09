import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react"; // Waxaan ku daray User icon
import { useAuth } from "../context/AuthContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { useCart } from "../context/CartContext.jsx"; // 1. Soo dhex geli CartContext

function IconButton({ children, label = "icon", onClick }) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="h-9 w-9 grid place-items-center rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-all active:scale-90"
      type="button"
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart(); // 2. Ka soo qaado tirada alaabta Cart-ka
  const navigate = useNavigate();
  const location = useLocation();

  const linkBase =
    "text-sm text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-white transition-colors px-2 py-1";
  const linkActive =
    "text-sky-500 dark:text-sky-400 font-bold border-b-2 border-sky-500 pb-1";

  const goLogin = () =>
    navigate("/login", { state: { from: location.pathname } });

  const doLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-white/5 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <div className="h-9 w-9 rounded-xl bg-sky-500/20 border border-sky-500/30 grid place-items-center group-hover:bg-sky-500/30 transition-all">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-sky-500"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="font-bold tracking-tight text-slate-900 dark:text-white text-lg">
            Electro<span className="text-sky-500">Hub</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {["Home", "Products", "About", "FAQ"].map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Actions Section */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <IconButton label="theme" onClick={toggleTheme}>
            {theme === "dark" ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-yellow-400"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="text-slate-600"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </IconButton>

          {/* SHOPPING CART (Icon-ka aad codsatay oo badge leh) */}
          <div className="relative">
            <IconButton label="cart" onClick={() => navigate("/cart")}>
              <ShoppingCart
                size={18}
                className="text-slate-700 dark:text-white"
              />
            </IconButton>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border border-white dark:border-slate-950 pointer-events-none">
                {totalItems}
              </span>
            )}
          </div>

          {/* Authentication Logic */}
          {!isAuthenticated ? (
            <button
              onClick={goLogin}
              className="ml-2 inline-flex items-center rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold px-5 h-9 text-sm transition-all"
            >
              Sign In
            </button>
          ) : (
            <div className="ml-2 flex items-center gap-3 pl-3 border-l border-slate-200 dark:border-white/10">
              {/* User Account Button - Kan ayaa Dashboard-ka geynaya */}
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 group"
              >
                <div className="h-8 w-8 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold shadow-md group-hover:bg-sky-400 transition-colors">
                  <User size={16} />
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                    {user?.name || "Account"}
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">
                    Dashboard
                  </p>
                </div>
              </button>

              {/* Logout Button */}
              <button
                onClick={doLogout}
                className="h-8 w-8 grid place-items-center rounded-lg border border-red-500/20 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white transition-all"
                title="Logout"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

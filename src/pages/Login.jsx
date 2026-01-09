import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(""); // State-ka lagu qabanayo ciladaha
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Dib u tirtir ciladii hore

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const fullName = formData.get("fullName");

    // 1. Soo aqri liiska dadka horay u jiray
    const storedUsers = JSON.parse(localStorage.getItem("all_users")) || [];

    if (isSignUp) {
      // --- LOGIC-GA SIGN UP ---
      const userExists = storedUsers.find((u) => u.email === email);

      if (userExists) {
        setError("User-kan horay ayuu u jiray! Fadlan Login dheh.");
        return;
      }

      const newUser = { name: fullName, email, password };
      const updatedUsers = [...storedUsers, newUser];

      // Kaydi dhamaan dadka is-diwaangeliyey
      localStorage.setItem("all_users", JSON.stringify(updatedUsers));

      // Isla markiiba gal (Login) kadib markuu is-diwaangeliyo
      login(newUser);
      navigate("/");
    } else {
      // --- LOGIC-GA SIGN IN (VALIDATION) ---
      const existingUser = storedUsers.find((u) => u.email === email);

      if (!existingUser) {
        setError("User-kan ma jiro! Fadlan marka hore is-diwaangeli.");
        return;
      }

      if (existingUser.password !== password) {
        setError("Email-ka ama Password-ka aad gelisay waa khalad!");
        return;
      }

      // Haddii wax kasta sax yihiin
      login(existingUser);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#020617] p-6 transition-colors">
      <div className="w-full max-w-md bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10">
        <h2 className="text-3xl font-bold mb-2 text-center">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <p className="text-slate-500 text-sm text-center mb-6">
          {isSignUp ? "Join ElectroHub today" : "Enter your details to sign in"}
        </p>

        {/* --- ERROR MESSAGE --- */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold text-center animate-pulse">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium mb-1 ml-1 text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <input
                name="fullName"
                type="text"
                required
                className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white"
                placeholder="Cimran"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1 ml-1 text-slate-700 dark:text-slate-300">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white"
              placeholder="cimran@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 ml-1 text-slate-700 dark:text-slate-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-500 text-slate-900 dark:text-white"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-sky-500/20 active:scale-95 mt-2"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError(""); // Tirtir error-ka markuu beddelayo mode-ka
            }}
            className="text-sky-500 font-bold hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

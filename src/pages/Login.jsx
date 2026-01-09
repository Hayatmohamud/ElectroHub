import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // MUHIIM: Waxaan soo qabanaynaa fullName haddii uu yahay SignUp
    // Haddii uu yahay SignIn, waxaan siinaynaa magac default ah ama mid emailka laga soo qaatay
    const userData = {
      name: isSignUp
        ? formData.get("fullName")
        : formData.get("email").split("@")[0],
      email: formData.get("email"),
    };

    console.log("Xogta la qabtay:", userData);

    login(userData);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#020617] p-6 transition-colors">
      <div className="w-full max-w-md bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* MAGACA: Wuxuu soo baxayaa kaliya marka la is diwaangelinayo */}
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium mb-1 ml-1">
                Full Name
              </label>
              <input
                name="fullName" // HUBI IN KANI UU YAHAY fullName
                type="text"
                required
                className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Cimran"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1 ml-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="cimran@gmai.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 ml-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 rounded-xl transition-all active:scale-95"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sky-500 font-bold hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

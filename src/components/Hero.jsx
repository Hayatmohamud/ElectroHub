import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      {/* Background Glows (Optional) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">
                Future Tech Today
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Experience the <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Next Generation
                </span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Discover the latest electronics that redefine innovation.
                Premium quality, cutting-edge technology, and unbeatable prices.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
              >
                Shop Now
                <span>→</span>
              </Link>
              <button className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700">
                View Deals
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-10 border-t border-slate-100 dark:border-slate-800">
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  50K+
                </div>
                <div className="text-sm text-slate-500">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  1000+
                </div>
                <div className="text-sm text-slate-500">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white">
                  24/7
                </div>
                <div className="text-sm text-slate-500">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative hidden lg:block">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] scale-110 rounded-full" />

            <div className="relative z-10 animate-[bounce_5s_infinite]">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
                alt="Premium Headphones"
                className="w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-10 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-xl">
                  🎧
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Pro Audio
                  </div>
                  <div className="text-xs text-slate-500">Premium Sound</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-10 left-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white text-xl">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Free Shipping
                  </div>
                  <div className="text-xs text-slate-500">Orders $50+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    // 'bg-slate-50 dark:bg-slate-950/40' ayaa xakameynaya midabka asalka ah (background)
    <footer className="mt-16 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-950/40 transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-sky-500/10 dark:bg-sky-500/20 border border-sky-500/30 grid place-items-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z"
                  stroke="currentColor"
                  className="text-sky-500 dark:text-sky-400"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="font-bold tracking-tight text-slate-900 dark:text-white">
              Electro<span className="text-sky-500 dark:text-sky-400">Hub</span>
            </div>
          </div>

          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            Your one-stop destination for premium electronics. Quality products,
            competitive prices, exceptional service.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li>
              <Link
                className="hover:text-sky-500 dark:hover:text-white transition-colors"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-sky-500 dark:hover:text-white transition-colors"
                to="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-sky-500 dark:hover:text-white transition-colors"
                to="/products"
              >
                Deals
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">Support</h4>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-400">
            <li>
              <Link
                className="hover:text-sky-500 dark:hover:text-white transition-colors"
                to="/faq"
              >
                FAQs
              </Link>
            </li>
            <li>
              <a
                className="hover:text-sky-500 dark:hover:text-white transition-colors"
                href="#shipping"
              >
                Shipping Info
              </a>
            </li>
            <li>
              <a
                className="hover:text-sky-500 dark:hover:text-white transition-colors"
                href="#returns"
              >
                Returns
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">
            Newsletter
          </h4>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Subscribe for exclusive deals and new product updates.
          </p>

          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              className="h-11 flex-1 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 text-sm outline-none focus:border-sky-500 dark:text-white text-slate-900"
            />
            <button
              className="h-11 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white dark:text-slate-950 font-bold transition shadow-lg shadow-sky-500/20"
              type="submit"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/5 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} ElectroHub. All rights reserved.
      </div>
    </footer>
  );
}

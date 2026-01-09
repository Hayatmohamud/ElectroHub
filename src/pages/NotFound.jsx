import { Link } from "react-router-dom";

export  function NotFound() {
  return (
    <div className="py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="mt-3 text-slate-400">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-flex h-11 items-center px-6 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

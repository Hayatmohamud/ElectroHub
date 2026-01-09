import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const USERS_KEY = "electrohub_users"; // demo users list

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export default function Auth() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [mode, setMode] = useState("login"); // "login" | "signup"
  const isSignup = mode === "signup";

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const title = useMemo(() => (isSignup ? "Sign Up" : "Sign In"), [isSignup]);
  const subtitle = useMemo(
    () =>
      isSignup
        ? "Create account si aad u isticmaasho ElectroHub."
        : "Login si aad u isticmaasho ElectroHub.",
    [isSignup]
  );

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const toggleMode = () => {
    setError("");
    setForm({ name: "", email: "", password: "" });
    setMode((m) => (m === "login" ? "signup" : "login"));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = form.email.trim().toLowerCase();
    const password = form.password;

    try {
      if (!email || !password) {
        throw new Error("Email and password are required.");
      }

      if (isSignup) {
        const name = form.name.trim();
        if (!name) throw new Error("Name is required.");

        const users = getUsers();
        const exists = users.some((u) => u.email === email);
        if (exists) throw new Error("This email is already registered.");

        // save user (demo)
        const newUser = { name, email, password };
        saveUsers([...users, newUser]);

        // auto-login
        await login({ email, password });
        navigate(from, { replace: true });
        return;
      }

      // login mode: validate against stored users
      const users = getUsers();
      const found = users.find((u) => u.email === email);
      if (!found) throw new Error("Account not found. Please sign up.");
      if (found.password !== password) throw new Error("Wrong password.");

      await login({ email, password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-14">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-sky-500/20 border border-sky-500/30 grid place-items-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z"
                  stroke="currentColor"
                  className="text-sky-400"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-sm text-slate-400">{subtitle}</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            {isSignup && (
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className="mt-2 h-11 w-full rounded-xl bg-slate-950/40 border border-white/10 px-4 text-sm outline-none focus:border-sky-500"
                />
              </div>
            )}

            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="mt-2 h-11 w-full rounded-xl bg-slate-950/40 border border-white/10 px-4 text-sm outline-none focus:border-sky-500"
              />
            </div>

            <div>
              <label className="text-sm text-slate-300">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={onChange}
                placeholder="••••••••"
                className="mt-2 h-11 w-full rounded-xl bg-slate-950/40 border border-white/10 px-4 text-sm outline-none focus:border-sky-500"
              />
            </div>

            {error ? (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="h-11 w-full rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition disabled:opacity-60"
            >
              {loading ? "Please wait..." : title}
            </button>

            <div className="text-center text-sm text-slate-400">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-sky-400 hover:text-sky-300"
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-sky-400 hover:text-sky-300"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>

            <div className="text-center text-sm text-slate-400">
              <Link className="hover:text-white" to="/">
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

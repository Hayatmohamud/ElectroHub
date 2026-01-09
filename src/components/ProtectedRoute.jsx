import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn, booting } = useAuth();
  const location = useLocation();

  // inta auth-ka localStorage ka akhrinayo
  if (booting) {
    return (
      <div className="py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">
          Loading...
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

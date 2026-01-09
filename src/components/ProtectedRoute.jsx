
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Waxaan hubineynaa haddii uu jiro 'user' ku kaydsan LocalStorage
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Haddii uusan jirin, u ridi bogga Login
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Change this later to your real authentication logic
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
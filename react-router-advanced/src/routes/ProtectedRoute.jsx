import { Navigate } from "react-router-dom";

const isAuthenticated = true;

function ProtectedRoutes({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/Login" replace />;
  }

  return children;
}

export default ProtectedRoutes;

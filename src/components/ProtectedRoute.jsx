import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If NOT logged in → redirect to login
  if (token === null) {
    return <Navigate to="/login" replace />;
  }

  // If logged in → allow access
  return children;
};

export default ProtectedRoute;

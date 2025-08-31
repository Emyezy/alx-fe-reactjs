// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

// ✅ Mock authentication hook
function useAuth() {
  // Replace with real logic if needed
  const user = { loggedIn: true }; // change to false to simulate not logged in
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;

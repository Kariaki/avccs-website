import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;

import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../contexts/authContext";

const PrivateRoute = () => {
  // const { user } = useAuth();
  const location = useLocation();

  const user = true;

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;

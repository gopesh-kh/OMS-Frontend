import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated,
  );

  return isAuthenticated ? <Navigate to="/products" replace /> : <Outlet />;
};

export default PublicRoute;

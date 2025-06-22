import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const CheckAuth = ({ isAuthenticated, user, children }) => {
  const { isLoading, authLoaded } = useSelector((state) => state.auth);
  const location = useLocation();

  if (isLoading) {
    return <div className="w-full border-red-500">Loading</div>;
  }

  if (!authLoaded) {
    return <div>Loading session...</div>
  }

  const path = location.pathname;

  const isAuthPage = path.startsWith("/auth");
  const isAdminRoute = path.startsWith("/admin");
  const isCustomerRoute = path.startsWith("/customer");

  // Jika user SUDAH login dan akses halaman auth (login/register), redirect ke dashboard
  if (isAuthenticated && isAuthPage) {
    if (user?.role === "admin") return <Navigate to="/admin/dashboard" />;
    if (user?.role === "customer") return <Navigate to="/customer/dashboard" />;
  }

  // Admin coba akses halaman costumer
  if (isAuthenticated && user?.role === "admin" && isCustomerRoute) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Customer coba akses halaman admin
  if (isAuthenticated && user?.role === "customer" && isAdminRoute) {
    return <Navigate to="/unauth" />;
  }

  // Belum login dan akses selain halaman publik
  const publicRoutes = ["/", "/dashboard", "/auth/login", "/auth/register"];
  const isPublic = publicRoutes.includes(path);

  if (!isAuthenticated && !isPublic) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  

  return <>{children}</>;
};

export default CheckAuth;


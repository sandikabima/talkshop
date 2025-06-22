import { Navigate, Route, Routes } from "react-router-dom"
import AuthLayout from "./features/auth/layout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { refreshToken } from "./store/auth/authThunk"
import CheckAuth from "./shared/components/common/check-auth"
import AdminLayout from "./features/admin/Layout"
import AdminDashboard from "./pages/admin/Dashboard"
import AdminUser from "./pages/admin/User"
import AdminCategories from "./pages/admin/Categories"
import AdminProduct from "./pages/admin/Product"
import AdminStock from "./pages/admin/Stock"
import CommonLayout from "./features/common/Layout"
import AuthLogin from "./pages/auth/Login"
import CommonDashboard from "./pages/common/Dashboard"
import CustomerLayout from "./features/customer/Layout"
import CustomerDashboard from "./pages/customer/Dashboard"
import AuthRegister from "./pages/auth/Register"


function App() {

  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(refreshToken())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<CommonDashboard />} />
      </Route>

      <Route
        path="/auth"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            {<AuthLayout />}
          </CheckAuth>}>
        <Route path="login" element={<AuthLogin />} />
        <Route path="register" element={<AuthRegister />} />
      </Route>

      <Route
        path="/admin"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            {<AdminLayout />}
          </CheckAuth>}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<AdminUser />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="products" element={<AdminProduct />} />
        <Route path="stocks" element={<AdminStock />} />
      </Route>

      <Route
        path="/customer"
        element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            {<CustomerLayout />}
          </CheckAuth>}>
          <Route path="dashboard" element={<CustomerDashboard />} />
      </Route>


    </Routes >
  )

}

export default App

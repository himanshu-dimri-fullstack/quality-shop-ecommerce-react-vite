import './App.css'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import Cart from './pages/Cart'
import CheckoutPage from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import Login from './pages/auth/Login'
import Dashboard from './pages/dashboard/Dashboard'
import Signup from './pages/auth/Signup'
import PrivateRoute from './routes/PrivateRoute'
import PublicLayout from './layouts/PublicLayout'

function App() {

  return (
    <>

      <Routes>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/category/:catSlug/:slug" element={<ProductDetailPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

      </Routes>

    </>
  )
}

export default App

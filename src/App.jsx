import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ScrollToTop from './components/ScrollToTop'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:slug" element={<ProductPage />} />
        <Route path="/:catSlug/:slug" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:slug" element={<ProductPage />} />
        <Route path="/:catSlug/:slug" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

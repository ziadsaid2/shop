import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavbarComponent from './components/navbar/navbar';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import Login from './pages/login/login';
import ProductDetails from './components/productdetails/productsdetails';
import ProductCard from './components/productcard/productcard';
import Products from './pages/products/products';
import Footer from './components/footer/footer';
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
    <ToastContainer />
    <NavbarComponent/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

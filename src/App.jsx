import './App.css'
import Home from './component/home/Home'
import { Routes, Route } from "react-router-dom";
import HeroPage from './layout/HeroPage';
import Footer from './layout/footer/Footer';
import Category from './component/category/Category';
import Products from './component/home/Products';
import ProductDetails from './component/product/ProductDetails';
function App() {
 

  return (
    <>
    <HeroPage/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route extact path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products/:keyword" element={<Products />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App

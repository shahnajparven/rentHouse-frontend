import './App.css'
import Home from './component/home/Home'
import { Routes, Route } from "react-router-dom";
import HeroPage from './layout/HeroPage';
import Footer from './layout/footer/Footer';
import Category from './component/category/Category';
import Products from './component/home/Products';
import ProductDetails from './component/product/ProductDetails';
import Pickup from './component/pickup/Pickup';
import Test from './component/pickup/Test';
import Productttt from './component/home/Productttt';
import Search from './component/home/Search';
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
        <Route extact path="/Pickup" element={<Pickup />} />
        <Route extact path="/Test" element={<Test />} />
        <Route path="/Productttt" element={<Productttt />} />
        <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App

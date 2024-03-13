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
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import apiInstance from './config/axios';
import { loadUser } from './actions/userAction';
import store from "./store.js";
import UserOperations from './layout/Header/UserOperations.jsx';
import LoginSignUp from './component/user/LoginSignUp.jsx';
import ProductCard from './component/home/ProductCard.jsx';


function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await apiInstance.get("stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

 

  return (
    <>
    <HeroPage isAuthenticated={isAuthenticated} />
    {isAuthenticated && <UserOperations user={user} />}
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
        <Route path="/LoginSignup" element={<LoginSignUp />} />
        <Route path="/ProductCard" user={user} element={<ProductCard />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App

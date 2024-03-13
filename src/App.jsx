import "./App.css";
import Home from "./component/home/Home";
import { Routes, Route } from "react-router-dom";
import HeroPage from "./layout/HeroPage";
import Footer from "./layout/footer/Footer";
import Category from "./component/category/Category";
import Products from "./component/home/Products";
import ProductDetails from "./component/product/ProductDetails";
import Pickup from "./component/pickup/Pickup";
import Test from "./component/pickup/Test";
import Productttt from "./component/home/Productttt";
import Search from "./component/home/Search";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import apiInstance from "./config/axios";
import { loadUser } from "./actions/userAction";
import store from "./store.js";
import UserOperations from "./layout/Header/UserOperations.jsx";
import LoginSignUp from "./component/user/LoginSignUp.jsx";
import ProductCard from "./component/home/ProductCard.jsx";
import ProtectedRoute from "./component/Route/ProtectedRoute.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./component/cart/Payment.jsx";
import NewProduct from "./component/category/NewProduct.jsx";
import Cart from "./component/cart/Cart.jsx";
import Notes from "./component/pickup/Notes.jsx";
import ForgotPassword from "./component/user/ForgotPassword.jsx";
import ResetPassword from "./component/user/ResetPassword.jsx";
import OrderDetails from "./component/order/OrderDetails.jsx";
import MyOrders from "./component/order/MyOrders.jsx";
import { Dashboard } from "@material-ui/icons";
import UpdateProfile from "./component/user/UpdateProfile.jsx";
import UpdatePassword from "./component/user/UpdatePassword.jsx";
import Profile from "./component/user/Profile.jsx";
import UpdateProduct from "./component/admin/UpdateProduct.jsx";
import OrderList from "./component/admin/OrderList.jsx";
import UsersList from "./component/admin/UserList.jsx";
import UpdateUser from "./component/admin/UpdateUser.jsx";
import ProcessOrder from "./component/admin/ProcessOrder.jsx";
import PickupList from "./component/admin/PickupList.jsx";
import Slidebar from "./component/admin/Slidebar.jsx";
import ProductList from "./component/admin/ProductList.jsx";
import Shipping from "./component/cart/Shipping.jsx";
import ConfirmOrder from "./component/cart/ConfirmOrder.jsx";
import OrderSuccess from "./component/cart/OrderSuccess.jsx";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await apiInstance.get("stripeapikey");

  //   setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  //   store.dispatch(loadUser());
  //   getStripeApiKey();
  // }, []);

  return (
    <>
      <HeroPage isAuthenticated={isAuthenticated} />
      {isAuthenticated && <UserOperations user={user} />}

      <Elements stripe={loadStripe(stripeApiKey)}>
        <Routes>
          <Route exact path="/process/payment" element={<ProtectedRoute />}>
            <Route exact path="/process/payment" element={<Payment />} />
          </Route>
        </Routes>
      </Elements>
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

        <Route path="/NewProduct" element={<NewProduct />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} />
          <Route exact path="/me/update" element={<UpdateProfile />} />
          <Route path="/password/update" element={<UpdatePassword />} />

          <Route
            isAdmin={true}
            path="/admin/dashboard"
            element={<Dashboard />}
          />
          <Route path="/Slidebar" element={<Slidebar />} />
          <Route
            isAdmin={true}
            path="/admin/products"
            element={<ProductList />}
          />
          <Route
            isAdmin={true}
            path="/admin/product/:id"
            element={<UpdateProduct />}
          />
          <Route isAdmin={true} path="/admin/users" element={<UsersList />} />
          <Route
            isAdmin={true}
            path="/admin/user/:id"
            element={<UpdateUser />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/order/:id"
            element={<ProcessOrder />}
          />
          <Route
            isAdmin={true}
            exact
            path="/admin/pickup"
            element={<PickupList />}
          />

          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/order/confirm" element={<ConfirmOrder />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/order/:id" element={<OrderDetails />} />
          <Route path="/admin/orders" element={<OrderList />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

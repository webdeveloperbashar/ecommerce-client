import { Router } from "@reach/router";
// import { useEffect, useState } from "react";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import ProductDetails from '../pages/Product-details';
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Shop from "../pages/Shop";
const Routes = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   localStorage.getItem("user") && setLoggedIn(true);
  // }, []);
  return (
    <Router>
      <Home path="/" />
      <Shop path="/shop" />
      <Contact path="/contact" />
      <Login path="/login" />
      <Register path="/register" />
      <ForgotPassword path="/forgotpassword" />
      <ResetPassword path="/resetpassword" />
      <Cart path="/cart" />
      <Favorite path="/favourite" />
      <Checkout path="/checkout" />
      <ProductDetails path="/product-details" />
      {/* {loggedIn ? ( */}
        <MyAccount path="/user/account" />
      {/* // ) : ( */}
        {/* // <Redirect from="*" to="/login" noThrow /> */}
      {/* // )} */}
    </Router>
  );
};

export default Routes;

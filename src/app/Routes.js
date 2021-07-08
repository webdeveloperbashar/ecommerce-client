import { Router } from "@reach/router";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
import Shop from "../pages/Shop";
const Routes = () => {
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
    </Router>
  );
};

export default Routes;

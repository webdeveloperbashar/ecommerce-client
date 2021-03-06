import { Router } from "@reach/router";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import ProductDetails from "../pages/Product-details";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import SearchByCategory from "../pages/Search-By-Category/index";
import SearchByTag from "../pages/Search-By-Tag/index";
import EmailVerify from "../pages/Email-verify";
import Error from "../pages/Not-found";
import NewPasswordSetup from "../pages/ForgotPassword/New-Password-Setup";
import getDataFromLocalhost from "../config/GetLocalhostData";
import { useSelector } from "react-redux";
const Routes = () => {
  const user = getDataFromLocalhost("user");
  const stateUser = useSelector((state) => state.login.user);
  return (
    <Router>
      <Home exact path="/" />
      <Shop path="/shop" />
      <SearchByCategory path="/searchByCategory/:category" />
      <SearchByTag path="/searchByTag/:tag" />
      <Contact path="/contact" />
      <Login path="/login" />
      <Register path="/register" />
      <ForgotPassword path="/forgotpassword" />
      <Cart path="/cart">
        <Cart />
      </Cart>
      <Checkout path="/checkout">
        <Checkout />
      </Checkout>
      <ProductDetails path="/product-details/:id" />
      <MyAccount
        path={`/my-account/${user?.username || stateUser?.username}`}
      />
      <EmailVerify path="/user/email_verify/:token" />
      <NewPasswordSetup path="/user/forgot_password/:token" />
      <Error path="*" />
    </Router>
  );
};

export default Routes;

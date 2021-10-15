import { Router } from "@reach/router";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyAccount from "../pages/MyAccount";
import ProductDetails from "../pages/Product-details";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import EmailVerify from "../pages/Email-verify";
import Error from "../pages/Not-found";
import NewPasswordSetup from "../pages/ForgotPassword/New-Password-Setup";
import getDataFromLocalhost from "../config/GetLocalhostData";
import { useSelector } from "react-redux";
const Routes = () => {
  const user = getDataFromLocalhost("user");
  const stateUser = useSelector((state) => state.login.user);
  // const history = createBrowserHistory();
  // return (
  //   <Router history={history}>
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route path="/shop" component={Shop} />
  //       <Route path="/contact" component={Contact} />
  //       <Route
  //         path="/login"
  //         render={() =>
  //           getDataFromLocalhost("user") ? <Redirect to="/" /> : <Login />
  //         }
  //       />
  //       <Route
  //         path="/register"
  //         render={() =>
  //           getDataFromLocalhost("user") ? <Redirect to="/" /> : <Register />
  //         }
  //       />
  //       <Route path="/forgotpassword" component={ForgotPassword} />
  //       <Route path="/cart">
  //         <Cart />
  //       </Route>
  //       <Route path="/favourite" component={Favorite} />
  //       <Route path="/checkout">
  //         <Checkout />
  //       </Route>
  //       <Route path="/product-details/:id" component={ProductDetails} />
  //       <Route path={`/my-account/${user?.username || stateUser?.username}`}>
  //         <MyAccount />
  //       </Route>
  //       <Route path="/user/email_verify/:token" component={EmailVerify} />
  //       <Route
  //         path="/user/forgot_password/:token"
  //         component={NewPasswordSetup}
  //       />
  //       <Route path="*" component={Error} />
  //     </Switch>
  //   </Router>
  // );
  return (
    <Router>
      <Home exact path="/" />
      <Shop path="/shop" />
      <Contact path="/contact" />
      <Login path="/login" />
      <Register path="/register" />
      <ForgotPassword path="/forgotpassword" />
      <Cart path="/cart">
        <Cart />
      </Cart>
      <Favorite path="/favourite" />
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

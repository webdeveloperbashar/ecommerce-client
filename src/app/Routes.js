import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
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
import ResetPassword from "../pages/ResetPassword";
import Shop from "../pages/Shop";
import EmailVerify from "../pages/Email-verify";
import Error from "../pages/Not-found";
import getDataFromLocalhost from "./../config/GetLocalhostData";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route
          path="/login"
          render={() =>
            getDataFromLocalhost("user") ? <Redirect to="/" /> : <Login />
          }
        />
        <Route
          path="/register"
          render={() =>
            getDataFromLocalhost("user") ? <Redirect to="/" /> : <Register />
          }
        />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <PrivateRoute path="/resetpassword">
          <ResetPassword />
        </PrivateRoute>
        <Route path="/cart" component={Cart} />
        <Route path="/favourite" component={Favorite} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/product-details" component={ProductDetails} />
        <PrivateRoute path="/user/my-account">
          <MyAccount />
        </PrivateRoute>
        <Route path="/user/email_verify/:token" component={EmailVerify} />
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
  );
};

export default Routes;

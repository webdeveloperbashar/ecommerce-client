import { Router } from "@reach/router";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from '../pages/Register';
import Shop from "../pages/Shop";
const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Shop path="/shop" />
      <Contact path="/contact" />
      <Login path="/login" />
      <Register path="/register" />
    </Router>
  );
};

export default Routes;

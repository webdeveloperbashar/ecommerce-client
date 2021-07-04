import { Router } from "@reach/router";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Shop from "../pages/Shop";

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
      <Shop path="/shop" />
      <Contact path="/contact" />
      <Login path="/login" />
    </Router>
  );
};

export default Routes;

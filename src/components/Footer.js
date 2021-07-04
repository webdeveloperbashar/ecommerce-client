import "bootstrap/dist/css/bootstrap.min.css";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import logo from "../assets/images/brand-logo/valley.svg";
import HorizontalLine from "../config/HorizontalLine";
import NavLink from '../config/NavLink';
const Footer = () => {
  return (
    <main className="bg-dark m-top__4 footer__wrapper">
      <div className="container">
        <div className="footer__content py-5">
          <div className="row footer__row">
            <div className="col-md-3">
              <div className="footer__logo">
                <img src={logo} className="img-fluid" alt="logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__location font-blue-gray">
                <h2 className="font-blue-gray">Contact</h2>
                <ul>
                  <li>
                    <FaLocationArrow className="font-blue-gray" />{" "}
                    <span className="m-left__2">Banasree, Rampura,Dhaka,</span>
                  </li>
                  <li>
                    <FaPhone className="font-blue-gray" />{" "}
                    <span className="m-left__2">(+880)123456789</span>
                  </li>
                  <li>
                    <SiGmail className="font-blue-gray" />{" "}
                    <span className="m-left__2">greenvalleyshop@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__category">
                <h2 className="font-blue-gray">Categories</h2>
                <ul>
                  <li>
                    <NavLink to="/vegetablefruits" className="footer__cate font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Vegetable & Fruits
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/beverage" className="footer__cate font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Beverage
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/healthwealth" className="footer__cate font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Health & Wealth
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/packagefood" className="footer__cate font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Package Food
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dairyproduct" className="footer__cate font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Dairy Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/groceryproduct" className="footer__cate font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Grocery Products
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__menu">
                <h2 className="font-blue-gray">Quick Links</h2>
                <ul>
                  <li>
                    <NavLink to="/" className="footer__link font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop" className="footer__link font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className="footer__link font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="footer__link font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="footer__link font-blue-gray">
                      <IoMdArrowDropright className="font-blue-gray font-size__3" />{" "} Register
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <HorizontalLine width="100%" height="1px" background="gray" />
        <footer className="p__4 text-center">
          <p className="font-blue-gray copyright__text">
            &copy; Copyright {new Date().getFullYear()} - All Right Reserved
            GreenValley Shop
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Footer;

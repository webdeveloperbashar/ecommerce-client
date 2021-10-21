import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaLocationArrow,
  FaPhone,
  FaHeadphonesAlt,
  FaEnvelopeOpen,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import NavLink from "../config/NavLink"
import logo from "../assets/images/brand-logo/valley.svg";
import payment from "../assets/images/brand-logo/payment.png";
import HorizontalLine from "../config/HorizontalLine";
import { useSelector } from "react-redux";
const Footer = () => {
  // get all categories
  const categories = useSelector((state) => state.category);

  return (
    <main className="bg-light m-top__4 footer__wrapper">
      <div className="container">
        <div className="footer__top">
          <div className="row">
            <div className="footer__top__wrapper">
              <div className="footer__widget d-flex align-items-center">
                <div className="footer__icon">
                  <FaHeadphonesAlt />
                </div>
                <div className="footer__content">
                  <p>Call Us 24/7</p>
                  <h3>(+880)123-45-67-89</h3>
                </div>
              </div>
              <div className="footer__widget d-flex align-items-center">
                <div className="footer__icon">
                  <FaEnvelopeOpen />
                </div>
                <div className="footer__content">
                  <p>Email Us</p>
                  <h3>webdeveloperbashar@gmail.com</h3>
                </div>
              </div>
              <div className="footer__widget follow d-flex align-items-center justify-content-center">
                <div className="footer__content">
                  <p>Follow Us</p>
                  <div className="follow__icon d-flex align-items-center justify-content-between">
                    <span>
                      <Link
                        to={{
                          pathname:
                            "https://www.facebook.com/webdeveloperbashar",
                        }}
                        target="_blank"
                      >
                        <FaFacebook />
                      </Link>
                    </span>
                    <span>
                      <Link
                        to={{
                          pathname:
                            "https://www.linkedin.com/in/webdeveloperbashar",
                        }}
                        target="_blank"
                      >
                        <FaLinkedin />
                      </Link>
                    </span>
                    <span>
                      <Link
                        to={{
                          pathname:
                            "https://www.linkedin.com/in/webdeveloperbashar",
                        }}
                        target="_blank"
                      >
                        <FaYoutube />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="footer__widget d-flex align-items-center">
                <div className="footer__content">
                  <img src={payment} className="img-fluid" alt="img-payment" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content py-5">
          <div className="row footer__row">
            <div className="col-md-3">
              <div className="footer__logo">
                <img src={logo} className="img-fluid" alt="logo" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__location">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <FaLocationArrow />{" "}
                    <span className="m-left__2">Banasree, Rampura,Dhaka,</span>
                  </li>
                  <li>
                    <FaPhone />{" "}
                    <span className="m-left__2">(+880)123456789</span>
                  </li>
                  <li>
                    <SiGmail />{" "}
                    <span className="m-left__2">support@greenvalley.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__category">
                <h2>Categories</h2>
                <ul>
                  {categories?.map((item) => (
                    <li key={item._id}>
                      <NavLink
                        to={`/searchByCategory/${item.category.split(" ").join("-")}`}
                        className="footer__cate "
                      >
                        <IoMdArrowDropright className="font-size__2" />{" "}
                        {item.category}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer__menu">
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <Link to="/" className="footer__link ">
                      <IoMdArrowDropright className="font-size__2" /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" className="footer__link ">
                      <IoMdArrowDropright className="font-size__2" /> Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="footer__link ">
                      <IoMdArrowDropright className="font-size__2" /> Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="footer__link ">
                      <IoMdArrowDropright className=" font-size__2" /> Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="footer__link ">
                      <IoMdArrowDropright className="font-size__2" /> Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <HorizontalLine width="100%" height="1px" background="#80808063" />
        <footer className="p__4 text-center">
          <p className=" copyright__text">
            &copy; Copyright {new Date().getFullYear()} - All Right Reserved
            GreenValleyGrocery Shop
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Footer;

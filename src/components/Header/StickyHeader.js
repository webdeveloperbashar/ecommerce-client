import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, Redirect } from "@reach/router";
import logo from "../../assets/images/brand-logo/valley.svg";
import { GetCartPrice, GetCartQuantity } from "../../config/GetCartVariant";
import getDataFromLocalhost from "../../config/GetLocalhostData";
import Login from "../Login";
import StickySearchForm from "./StickySearchForm";
const StickyHeader = ({ handleOpenDrawer }) => {
  const user = getDataFromLocalhost("user");
  // get user form redux store
  const stateUser = useSelector((state) => state.login.user);
  // get data react-redux
  const product = useSelector((state) => state.cart.cartItems);
  // react-redux hooks
  // logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    <Redirect to="/login" />
  };
  // device breakpoints
  const device = useBreakpoints();
  // sticky search form show and hide
  const [searchFormShow, setSearchFormShow] = useState(false);
  const handleIconClick = () => {
    setSearchFormShow(!searchFormShow);
  };
  const [stickyNav, setStickyNav] = useState(false);
  const stickyNavbar = () => {
    if (window.pageYOffset >= 300) {
      setStickyNav(true);
      return;
    } else {
      setStickyNav(false);
      return;
    }
  };
  window.addEventListener("scroll", stickyNavbar);
  return (
    <>
      <header
        className={`${
          stickyNav ? "sticky__header show" : "sticky__header"
        } py-1 bg-light`}
      >
        <div className="container">
          <div className="mobile__content">
            {/* mobile humberger icon */}
            <div className="mobile__icon">
              <IoMdMenu
                className="icon"
                onClick={() => handleOpenDrawer(!searchFormShow)}
              />
            </div>
            {/* mobile logo */}
            <div className="mobile__logo">
              <Link exact to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </div>
            {/* desktop menu */}
            <div className="navbar__collapse__sticky">
              <ul className="navbar-nav m-right__auto m-right__2">
                <li className="nav-item">
                  <Link exact className="p__2 font-light link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="p__2 font-light link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="p__2 font-light link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  {getDataFromLocalhost("user") ? (
                    <Link
                      onClick={handleLogout}
                      className="p__2 font-light link"
                      to="#"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link exact className="p__2 font-light link" to="/login">
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            {/* mobile balance and search icon */}
            <div className="mobile__search__icon">
              <ul>
                <li>
                  <span>${GetCartPrice(product)}</span>
                </li>
                <li>
                  <FaSearch
                    className="icon"
                    onClick={() => handleIconClick(false)}
                  />
                </li>
              </ul>
            </div>
            {/* sticky search form */}
            {device.isMobile && (
              <StickySearchForm searchFormShow={searchFormShow} />
            )}
            {/* desktop property */}
            <div className="common__property">
              <ul className="navbar-nav m-right__auto m-right__2">
                <li className="nav-item user__login">
                  {getDataFromLocalhost("user") ? (
                    <Link
                      className="m-left__2 p__2 bg-light__gray topHeader__icon"
                      to={`/my-account/${
                        user?.username || stateUser?.username
                      }`}
                    >
                      <FaRegUser />
                    </Link>
                  ) : (
                    <>
                      <Link
                        className="m-left__2 p__2 bg-light__gray topHeader__icon"
                        to="#"
                      >
                        <FaRegUser />
                      </Link>
                      <Login isShow width="349px" />
                    </>
                  )}
                </li>
                <li className="nav-item">
                  <Link
                    className="m-left__2 p__2 bg-light__gray topHeader__icon"
                    to="/cart"
                  >
                    <FaShoppingCart />{" "}
                    <span className="cart__badge">
                      {GetCartQuantity(product)}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="text-dark ms-4">
                    ${GetCartPrice(product)}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default StickyHeader;

import { Link, navigate } from "@reach/router";
import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/images/brand-logo/valley.svg";
import NavLink from "../config/NavLink";
import Login from "./Login";
import StickySearchForm from "./StickySearchForm";
const StickyHeader = ({ handleOpenDrawer }) => {
  // device breakpoints
  const device = useBreakpoints();
  // sticky search form show and hide
  const [searchFromShow, setSearchFromShow] = useState(false);
  const handleIconClick = () => {
    setSearchFromShow(!searchFromShow);
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
              <IoMdMenu className="icon" onClick={() => handleOpenDrawer(!searchFromShow)} />
            </div>
            {/* mobile logo */}
            <div className="mobile__logo">
              <img src={logo} className="logo" onClick={()=> navigate('/')} alt="logo" />
            </div>
            {/* desktop menu */}
            <div className="navbar__collapse__sticky">
              <ul className="navbar-nav m-right__auto m-right__2">
                <li className="nav-item">
                  <NavLink className="p__2 font-light link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="p__2 font-light link" to="/shop">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="p__2 font-light link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="p__2 font-light link" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* mobile balance and search icon */}
            <div className="mobile__search__icon">
              <ul>
                <li>
                  <span>$99.99</span>
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
              <StickySearchForm searchFromShow={searchFromShow} />
            )}
            {/* desktop property */}
            <div className="common__property">
              <ul className="navbar-nav m-right__auto m-right__2">
                <li className="nav-item user__login">
                  <Link
                    className="m-left__2 p__2 bg-light__gray topHeader__icon"
                    to="/login"
                  >
                    <FaRegUser />
                  </Link>
                  <Login isShow width="349px" heading="Login Form" />
                </li>
                <li className="nav-item">
                  <Link
                    className="m-left__2 p__2 bg-light__gray topHeader__icon"
                    to="#"
                  >
                    <GrFavorite /> <span className="cart__badge">4</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="m-left__2 p__2 bg-light__gray topHeader__icon"
                    to="/cart"
                  >
                    <FaShoppingCart /> <span className="cart__badge">4</span>
                  </Link>
                </li>
                <li className="nav-item">
                    <span className="text-dark ms-4">$99.99</span>
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

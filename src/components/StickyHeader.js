import { Link } from "@reach/router";
import { useState } from "react";
import { FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/images/brand-logo/valley.svg";
import NavLink from "../util/NavLink";
import CartDrawer from "./CartDrawer";
const StickyHeader = ({
  openCartDrawer,
  handleOpenDrawer,
  handleCloseDrawer,
}) => {
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
      <CartDrawer
        openCartDrawer={openCartDrawer}
        handleCloseDrawer={handleCloseDrawer}
      />
      <header
        className={`${
          stickyNav ? "sticky__header show" : "sticky__header"
        } py-1 bg-light`}
      >
        <div className="container">
          <div className="mobile__content">
            {/* mobile icon */}
            <div className="mobile__icon">
              <IoMdMenu />
            </div>
            {/* mobile logo */}
            <div className="mobile__logo">
              <img src={logo} className="logo" alt="logo" />
            </div>
            {/* destop menu */}
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
                  <NavLink className="p__2 font-light link" to="/blog">
                    Blog
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
            {/* mobile search icon */}
            <div className="mobile__search__icon">
              <span>$99.99</span> <FaSearch />
            </div>
            {/* desktop property */}
            <div className="common__property">
              <ul className="navbar-nav m-right__auto m-right__2">
                <li className="nav-item">
                  <Link
                    className="m-left__2 p__2 bg-light__gray topHeader__icon"
                    to="/login"
                  >
                    <FaRegUser />
                  </Link>
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
                    to="#"
                    onClick={() => handleOpenDrawer()}
                  >
                    <FaShoppingCart /> <span className="cart__badge">4</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="m-left__4" to="#">
                    $99.99
                  </Link>
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

import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from "../../assets/images/brand-logo/valley.svg";
import getDataFromLocalhost from "../../config/GetLocalhostData";
import { userLogout } from "../../Store/Actions/UserAction";
import Login from "../Login";
import StickySearchForm from "./StickySearchForm";
const StickyHeader = ({ handleOpenDrawer }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = () =>{
    dispatch(userLogout(history))
  }
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
              <IoMdMenu
                className="icon"
                onClick={() => handleOpenDrawer(!searchFromShow)}
              />
            </div>
            {/* mobile logo */}
            <div className="mobile__logo">
              <NavLink exact to="/">
                <img src={logo} className="logo" alt="logo" />
              </NavLink>
            </div>
            {/* desktop menu */}
            <div className="navbar__collapse__sticky">
              <ul className="navbar-nav m-right__auto m-right__2">
                <li className="nav-item">
                  <NavLink exact className="p__2 font-light link" to="/">
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
                  {getDataFromLocalhost("user") ? (
                    <Link
                      onClick={handleLogout}
                      className="p__2 font-light link"
                      to="#"
                    >
                      Logout
                    </Link>
                  ) : (
                    <NavLink exact className="p__2 font-light link" to="/login">
                      Login
                    </NavLink>
                  )}
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
                  {getDataFromLocalhost("user") ? (
                    <Link
                      className="m-left__2 p__2 bg-light__gray topHeader__icon"
                      to="/user/my-account"
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
                    to="/favourite"
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

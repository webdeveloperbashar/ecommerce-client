import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHeadphones,
  FaRegUser,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand-logo/valley.svg";
import { GetCartPrice, GetCartQuantity } from "../../config/GetCartVariant";
import Login from "../Login";
import getDataFromLocalhost from "./../../config/GetLocalhostData";
const TopHeader = () => {
  // get quantity from redux store
  const product = useSelector((state) => state.cart.cartItems);
  // get user form localStorage
  const user = getDataFromLocalhost("user");
  // get user form redux store
  const stateUser = useSelector((state) => state.login.user);
  // When ordering then clear all quantity in the header
  return (
    <div className="topHeader bg-light">
      <div className="container d-grid display-grid d-flex justify-content-between align-items-center">
        <div className="brand__logo">
          <Link exact to="/">
            <img className="img-fluid logo" src={logo} alt="brand logo" />
          </Link>
        </div>
        <form className="search__form">
          <div className="d-flex">
            <input
              type="text"
              placeholder="Search product..."
              className="form-control"
            />
            <button type="submit" className="btn">
              <FaSearch />
            </button>
          </div>
        </form>
        <div className="navbar__collapse">
          <ul className="navbar-nav m-right__auto m-right__2">
            <li className="nav-item">
              <Link className="support p__2 d-flex align-items-center" to="#">
                <div className="m-right__2 support__icon">
                  <FaHeadphones className="font-olive-green" />
                </div>
                <div>
                  <p>Call us 24/7</p>
                  <h3 className="font-olive-green m-top__1">
                    (+880)123-45-67-89
                  </h3>
                </div>
              </Link>
            </li>
            <li className="nav-item user__login">
              {getDataFromLocalhost("user") ? (
                <Link
                  className="m-left__2 p__2 bg-light__gray topHeader__icon"
                  to={`/user/${
                    user?.username || stateUser?.username
                  }/my-account`}
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
                <span className="cart__badge">{GetCartQuantity(product)}</span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="ms-4 text-dark">
                ${GetCartPrice(product) > 3 ? GetCartPrice(product) : "00.00"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

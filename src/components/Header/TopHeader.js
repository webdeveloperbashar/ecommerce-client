import { Link, navigate, useMatch } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHeadphones,
  FaRegUser,
  FaSearch,
  FaShoppingCart
} from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import logo from "../../assets/images/brand-logo/valley.svg";
import Login from "../Login";
const TopHeader = () => {
  const match = useMatch("/login")
  return (
    <>
      <div className="topHeader bg-light">
        <div className="container d-grid display-grid d-flex justify-content-between align-items-center">
          <div className="brand__logo">
            <img
              className="img-fluid logo"
              onClick={() => navigate("/")}
              src={logo}
              alt="brand logo"
            />
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
                <Link
                  className="m-left__2 p__2 bg-light__gray topHeader__icon"
                  to="/login"
                >
                  <FaRegUser />
                </Link>
                {!match?.path && <Login isShow width="349px" />}
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
                <span className="ms-4 text-dark">$99.99</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;

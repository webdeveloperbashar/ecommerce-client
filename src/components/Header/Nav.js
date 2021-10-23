import { FaOutdent } from "react-icons/fa";
import { Link, navigate } from "@reach/router";
import getDataFromLocalhost from "../../config/GetLocalhostData";
import MobileNavbar from "./MobileNavbar";
import SubMenuCategory from "./Sub-Menu-Category";
import TopHeader from "./TopHeader";
import { handleLogout } from "../../Store/Actions/UserAction";
const Nav = ({ isShow }) => {
  // user logout
  return (
    <header className="desktop__navbar">
      <TopHeader />
      <MobileNavbar />
      <div className="navbar bg-dark">
        <div className="container d-flex nav-grid justify-content-between align-items-center">
          <div className="category font-light d-flex align-items-center">
            <ul className="d-flex align-items-center ">
              <li>
                <FaOutdent className="m-right__2" />
              </li>
              <li>
                <h4>Shop By Categories</h4>
                {isShow && <SubMenuCategory />}
              </li>
            </ul>
          </div>
          <div className="navbar__collapse">
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
                  <span
                    onClick={()=>handleLogout(navigate)}
                    className="p__2 font-light link"
                    style={{cursor: 'pointer'}}
                  >
                    Logout
                  </span>
                ) : (
                  <Link className="p__2 font-light link" to="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;

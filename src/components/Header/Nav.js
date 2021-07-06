import { FaOutdent } from "react-icons/fa";
import NavLink from "../../config/NavLink";
import SubMenuCategory from "./Sub-Menu-Category";
import TopHeader from "./TopHeader";
const Nav = ({ isShow }) => {
  return (
    <header className="desktop__navbar">
      <TopHeader />
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
        </div>
      </div>
    </header>
  );
};

export default Nav;

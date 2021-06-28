import { FaOutdent } from "react-icons/fa";
import NavLink from "../util/NavLink";
import TopHeader from "./TopHeader";
const Nav = () => {
  return (
    <>
      <TopHeader />
      <div className="navbar bg-dark__green">
        <div className="container d-flex nav-grid justify-content-between align-items-center">
          <div className="category font-light d-flex align-items-center">
            {/* <span className="d-flex align-items-center"> */}
              <span>
                <FaOutdent className="m-right__2" />
              </span>
              <span>
                <h4>Shop By Categories</h4>
              </span>
            {/* </span> */}
            {/* <SubCategory /> */}
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
          {/* <div className="toggler__icon">home</div> */}
        </div>
      </div>
    </>
  );
};

export default Nav;

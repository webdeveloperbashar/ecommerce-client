import { FaOutdent } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import getDataFromLocalhost from "../../config/GetLocalhostData";
import { userLogout } from "../../Store/Actions/UserAction";
import MobileNavbar from "./MobileNavbar";
import SubMenuCategory from "./Sub-Menu-Category";
import TopHeader from "./TopHeader";
const Nav = ({ isShow }) => {
  // userHistory hooks
  const history = useHistory()
  // dispatch function react-redux
  const dispatch = useDispatch()
  const handleLogout = () =>{
    dispatch(userLogout(history))
  }
  return (
    <header className="desktop__navbar">
      <TopHeader />
      <MobileNavbar/>
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
                  <Link onClick={handleLogout} className="p__2 font-light link" to="#">
                    Logout
                  </Link>
                ) : (
                  <NavLink className="p__2 font-light link" to="/login">
                    Login
                  </NavLink>
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

import { FaHome } from "react-icons/fa";
import { VscArrowBoth } from "react-icons/vsc";
import { Link, navigate } from "@reach/router";
import getDataFromLocalhost from "../../config/GetLocalhostData";
import Avatar from "../../assets/images/avatar/avatar.png";
import { useSelector } from "react-redux";
import { handleLogout } from "../../Store/Actions/UserAction";
import { FiArrowRight } from "react-icons/fi";
const CartDrawer = ({ openCartDrawer, handleCloseDrawer }) => {
  // get data from localStorage
  const user = getDataFromLocalhost("user");
  // get data from readux store
  const stateUser = useSelector((state) => state.login.user);
  // get all categories from react-redux
  const categories = useSelector((state) => state.category);
  // menu
  const menu = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/contact", name: "Contact" },
  ];
  return (
    <div
      className={`cart__drawer__wrapper ${openCartDrawer ? "w-100" : "w-0"}`}
    >
      <div
        className={`${openCartDrawer && "backdrop__effect"}`}
        onClick={() => handleCloseDrawer()}
      ></div>
      <div
        className={
          openCartDrawer ? "cart__drawer__inner active" : "cart__drawer__inner"
        }
      >
        <div className="card">
          <div className="card-body">
            <div className="profile">
              <div className="image">
                {!user?.profile ? (
                  <img src={Avatar} className="img-fluid" alt="img" />
                ) : (
                  <img src={user?.profile} className="img-fluid" alt="img" />
                )}
              </div>
              <div className="loggedIn__username">
                <h2>{user?.name}</h2>
              </div>
              {user ? (
                <div className="menu">
                  <ul>
                    <li>
                      <Link
                        to={`/my-account/${
                          user?.username || stateUser?.username
                        }`}
                        className="me-3"
                        onClick={() => handleCloseDrawer()}
                      >
                        Account
                      </Link>
                    </li>
                    <li>
                      <VscArrowBoth style={{ fontSize: "18px" }} />
                    </li>
                    <li onClick={() => handleCloseDrawer()}>
                      <span
                        onClick={() => handleLogout(navigate)}
                        className="ms-3"
                        style={{ cursor: "pointer" }}
                      >
                        Logout
                      </span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="authentication d-block">
                  <ul>
                    <li>
                      <Link to="/login" onClick={() => handleCloseDrawer()} className="me-3">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" onClick={() => handleCloseDrawer()} className="ms-3">
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="drawer__menu">
              <p>Menu</p>
              <ul>
                {menu.map((item) => (
                  <li>
                    <Link
                      onClick={() => handleCloseDrawer()}
                      exact
                      to={item.path}
                    >
                      <FaHome className="drawer__menu__icon" /> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="drawer__category">
              <p>Category</p>
              <ul>
                {categories.map((item) => (
                  <li>
                    <Link
                      to={`/searchByCategory/${item.category
                        .split(" ")
                        .join("-")}`}
                      className="p__2 justify-content-between d-flex align-items-center d-block font-blue-gray "
                      onClick={() => handleCloseDrawer()}
                    >
                      <span className="text">{item.category}</span>{" "}
                      <FiArrowRight className="arrow__icon" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

import { FaBlog, FaHome, FaShopify } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { VscArrowBoth } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
// import NavLink from "../../config/NavLink";
const CartDrawer = ({ openCartDrawer, handleCloseDrawer }) => {
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
                <img
                  src="https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371__340.jpg"
                  className="img-fluid"
                  alt="img"
                />
              </div>
              <div className="loggedIn__username">
                <h2>MD Abul Bashar</h2>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <Link to="/user/my-account" className="me-3">
                      Account
                    </Link>
                  </li>
                  <li>
                    <VscArrowBoth style={{ fontSize: "18px" }} />
                  </li>
                  <li>
                    <Link to="#" className="ms-3">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="authentication d-none">
                <ul>
                  <li>
                    <Link to="/login" className="me-3">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="ms-3">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="drawer__menu">
              <p>Menu</p>
              <ul>
                <li>
                  <NavLink exact to="/">
                    <FaHome className="drawer__menu__icon" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop">
                    <FaShopify className="drawer__menu__icon" />
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">
                    <FaBlog className="drawer__menu__icon" />
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <GrContact className="drawer__menu__icon" />
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="drawer__category">
              <p>Category</p>
              <ul>
                <li>
                  <Link to="/vegetable">Vegetable</Link>
                </li>
                <li>
                  <Link to="/packagefood">Package Food</Link>
                </li>
                <li>
                  <Link to="/vegetable">Grocery & Staples</Link>
                </li>
                <li>
                  <Link to="/vegetable">Dairy Products</Link>
                </li>
                <li>
                  <Link to="/vegetable">Beverages</Link>
                </li>
                <li>
                  <Link to="/vegetable">Health & Wealthness</Link>
                </li>
                <li>
                  <Link to="/vegetable">Dairy Bread & Eggs</Link>
                </li>
                <li>
                  <Link to="/vegetable">Fruits & Vegetable</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

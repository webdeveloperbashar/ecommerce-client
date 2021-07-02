import { FaBlog, FaHome, FaShopify } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { ImCross } from "react-icons/im";
import { VscArrowBoth } from "react-icons/vsc";
import NavLink from "../util/NavLink";
const CartDrawer = ({ openCartDrawer, handleCloseDrawer }) => {
  return (
    <div
      className={`cart__drawer__wrapper ${openCartDrawer ? "w-100" : "w-0"}`} onClick={()=>handleCloseDrawer()}
    >
      <div
        className={
          openCartDrawer ? "cart__drawer__inner active" : "cart__drawer__inner"
        }
      >
        <div className="card">
          <div className="card-body">
            <div className="profile">
              <ImCross
                className="close__icon"
                onClick={() => handleCloseDrawer()}
                style={{ cursor: "pointer" }}
              />
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
                    <NavLink to="/account" className="me-3">
                      Account
                    </NavLink>
                  </li>
                  <li>
                    <VscArrowBoth style={{ fontSize: "18px" }} />
                  </li>
                  <li>
                    <NavLink to="#" className="ms-3">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="authentication d-none">
                <ul>
                  <li>
                    <NavLink to="/login" className="me-3">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" className="ms-3">
                      Register
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="drawer__menu">
              <p>Menu</p>
              <ul>
                <li>
                  <NavLink to="/">
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
                  <NavLink to="/vegetable">Vegetable</NavLink>
                </li>
                <li>
                  <NavLink to="/packagefood">Package Food</NavLink>
                </li>
                <li>
                  <NavLink to="/vegetable">Grocery & Staples</NavLink>
                </li>
                <li>
                  <NavLink to="/vegetable">Dairy Products</NavLink>
                </li>
                <li>
                  <NavLink to="/vegetable">Beverages</NavLink>
                </li>
                <li>
                  <NavLink to="/vegetable">Health & Wealthness</NavLink>
                </li>
                <li>
                  <NavLink to="/vegetable">Dairy Bread & Eggs</NavLink>
                </li>
                <li>
                  <NavLink to="/vegetable">Fruits & Vegetable</NavLink>
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

import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import NavLink from "../config/NavLink";

const MobileStickyFooterMenu = () => {
  return (
    <footer className="mobile__sticky__footer__menu">
      <div className="container">
        <div className="row mobile__sticky__footer__row">
          <div className="col-md-4">
            <div className="mobile__sticky__footer">
              <div className="mobile__sticky__footer__content">
                <NavLink to="/myaccount">
                  <div className="footer__icon">
                    <FaRegUser />
                  </div>
                  <p>My Account</p>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4 middle__col">
            <div className="mobile__sticky__footer">
              <div className="mobile__sticky__footer__content">
                <NavLink to="/favorite">
                  <div className="footer__icon">
                    <GrFavorite />
                  </div>
                  <p>Favorite</p>
                  <span className="count">10</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mobile__sticky__footer">
              <div className="mobile__sticky__footer__content">
                <NavLink to="/cart">
                  <div className="footer__icon">
                    <FaShoppingCart />
                  </div>
                  <p>My Cart</p>
                  <span className="count">20</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileStickyFooterMenu;

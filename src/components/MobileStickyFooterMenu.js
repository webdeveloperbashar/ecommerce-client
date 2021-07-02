import { Link } from "@reach/router";
import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";

const MobileStickyFooterMenu = () => {
  return (
    <footer className="mobile__sticky__footer__menu">
      <div className="container">
        <div className="row mobile__sticky__footer__row">
          <div className="col-md-4">
            <div className="mobile__sticky__footer">
              <div className="mobile__sticky__footer__content">
                <Link to="/myaccount">
                  <div className="footer__icon">
                    <FaRegUser />
                  </div>
                  <p>My Account</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 middle__col">
            <div className="mobile__sticky__footer">
              <div className="mobile__sticky__footer__content">
                <Link to="/favorite">
                  <div className="footer__icon">
                    <GrFavorite />
                  </div>
                  <p>Favorite</p>
                  <span className="count">10</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mobile__sticky__footer">
              <div className="mobile__sticky__footer__content">
                <Link to="/cart">
                  <div className="footer__icon">
                    <FaShoppingCart />
                  </div>
                  <p>My Cart</p>
                  <span className="count">20</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MobileStickyFooterMenu;

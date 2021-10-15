import { FaRegUser, FaShoppingCart } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "@reach/router";
import { GetCartQuantity } from "../../config/GetCartVariant";
import getDataFromLocalhost from "../../config/GetLocalhostData";
const MobileStickyFooterMenu = () => {
  // get cart cartItems from react-redux store
  const product = useSelector((state) => state.cart.cartItems);
  // get order from redux store
  const order = useSelector((state) => state.createOrders.orders);
  if (order.success) {
    product.splice(0, product.length);
  }
  // get user form localStorage
  const user = getDataFromLocalhost("user");
  // get user form redux store
  const stateUser = useSelector((state) => state.login.user);
  return (
    <footer className="mobile__sticky__footer__menu">
      <div className="container">
        <div className="row mobile__sticky__footer__row">
          <div className="col-md-4">
            <div className="mobile__sticky__footer">
              <div className="mobile__sticky__footer__content">
                <Link
                  to={`/my-account/${user?.username || stateUser?.username}`}
                >
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
                <Link to="/shop">
                  <div className="footer__icon">
                    <FaStore />
                  </div>
                  <p>Shop</p>
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
                  <span className="count">{GetCartQuantity(product)}</span>
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

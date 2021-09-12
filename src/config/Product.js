import "bootstrap/dist/css/bootstrap.min.css";
import { CgChevronDoubleRight } from "react-icons/cg";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddToCartAction,
  DecreamentQuantityAction,
  IncreaseQuantityAction,
} from "../Store/Actions/CartAction";
import FakeData from "./FakeData";
import HorizontalLine from "./HorizontalLine";
const Product = ({
  productId,
  productImg,
  productName,
  productPrice,
  productSize,
}) => {
  // react-redux store product
  const cartItems = useSelector((state) => state.cart.cartItems).find(
    (pd) => pd.id === productId
  );
  // react-redux hooks
  const dispatch = useDispatch();
  // handle product Add to cart
  const handleProductAdd = (id) => {
    const data = FakeData.find((pd) => pd.id === id);
    dispatch(AddToCartAction(data, 1));
  };
  // quantity count
  const handleQuantity = (type) => {
    if (type === "increament") {
      dispatch(IncreaseQuantityAction(cartItems));
    }
    if (type === "decreament") {
      dispatch(DecreamentQuantityAction(cartItems));
    }
  };
  return (
    <>
      <div className="slider__box">
        <Link id="RouterNavLink" to={`/product-details/${productId}`}>
          <div className="discount__percent">-52%</div>
          <div className="slider__img">
            <img src={productImg} className="img-fluid" alt="slider one" />
          </div>
          <div className="slider__content">
            <p className="d-flex align-items-center justify-content-center">
              <ReactStars
                count={5}
                size={20}
                value={5}
                isHalf={true}
                a11y={false}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="text-dark">&nbsp;(4 Review)</span>
            </p>
            <h4 className="my-2">{productName}</h4>
            <h3 className="mb-2">${productPrice}</h3>
            <h4>{productSize}</h4>
            <HorizontalLine
              width="60px"
              height="1px"
              margin="8px auto"
              background="#A8B324"
            />
            {cartItems ? (
              <Link to="#">
                <div className="quantity pd_quantity">
                  <button onClick={() => handleQuantity("decreament")}>
                    -
                  </button>
                  <span>{cartItems.quantity}</span>
                  <button onClick={() => handleQuantity("increament")}>
                    +
                  </button>
                </div>
              </Link>
            ) : (
              <Link
                to="#"
                onClick={() => handleProductAdd(productId)}
                className="product__link"
              >
                Add to cart <CgChevronDoubleRight className="arrow__icon" />
              </Link>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;

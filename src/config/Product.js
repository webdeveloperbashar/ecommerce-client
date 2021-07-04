import "bootstrap/dist/css/bootstrap.min.css";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";
import HorizontalLine from "./HorizontalLine";
import NavLink from "./NavLink";

const Product = ({ productImg, productName, productPrice }) => {
  return (
    <>
      <div className="slider__box">
        <NavLink to="/shop">
          <div className="discount__percent">-52%</div>
          <div className="slider__img">
            <img src={productImg} className="img-fluid" alt="slider one" />
          </div>
          <div className="slider__content">
            <p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h4 className="my-2">{productName}</h4>
            <h3 className="mb-3">{productPrice}</h3>
            <HorizontalLine
              width="60px"
              height="1px"
              margin="8px auto"
              background="#A8B324"
            />
            <NavLink to="/ddd" className="product__link">
              Add to cart <CgChevronDoubleRight className="arrow__icon" />
            </NavLink>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Product;

import "bootstrap/dist/css/bootstrap.min.css";
import { CgChevronDoubleRight } from "react-icons/cg";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import FakeData from "./FakeData";
import HorizontalLine from "./HorizontalLine";

const Product = ({ productImg, productName, productPrice, productSize }) => {
  const handleProductAdd = (name) => {
    const data = FakeData.find((pd) => pd.name === name);
    data.quantity = 0;
    console.log(data);
  };
  return (
    <>
      <div className="slider__box">
        <Link id="RouterNavLink" to="/product-details">
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
            <h3 className="mb-2">{productPrice}</h3>
            <h4>{productSize}</h4>
            <HorizontalLine
              width="60px"
              height="1px"
              margin="8px auto"
              background="#A8B324"
            />
            <Link
              to="/product-details"
              onClick={() => handleProductAdd(productName)}
              className="product__link"
            >
              Add to cart <CgChevronDoubleRight className="arrow__icon" />
            </Link>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;

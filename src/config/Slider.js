import { Link, navigate } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";
import HorizontalLine from "./HorizontalLine";

const Slider = ({productImg,productName,productPrice,}) => {
  return (
    <>
      <div className="slider__box" onClick={() => navigate("/shop")}>
        <div className="slider__img">
          <img
            src={productImg}
            className="img-fluid"
            alt="slider one"
          />
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
          <Link to="/" className="product__link">
            Add to cart <CgChevronDoubleRight className="arrow__icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slider;

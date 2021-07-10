import { Link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import "react-multi-carousel/lib/styles.css";
import FakeData from './FakeData';
import HorizontalLine from "./HorizontalLine";

const Product = ({ productImg, productName, productPrice, productSize }) => {
  const handleProductAdd = (name) =>{
    const data = FakeData.find(pd=>pd.name === name)
    console.log(data);
    
  }
  return (
    <>
      <div className="slider__box">
        <Link id="RouterNavLink" to="/shop">
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
            <h3 className="mb-2">{productPrice}</h3>
            <h4>{productSize}</h4>
            <HorizontalLine
              width="60px"
              height="1px"
              margin="8px auto"
              background="#A8B324"
            />
            <Link to="#" onClick={()=>handleProductAdd(productName)} className="product__link">
              Add to cart <CgChevronDoubleRight className="arrow__icon" />
            </Link>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;

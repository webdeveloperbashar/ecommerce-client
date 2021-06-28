import { Link, navigate } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HorizontalLine from "./HorizontalLine";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProductSlider = () => {
  return (
    <div className="products">
      <Carousel
        swipeable={false}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={1500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="slider__box" onClick={() => navigate("/login")}>
          <div className="slider__img">
            <img
              src="https://i.ibb.co/gzD9DdP/09.png"
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
            <h4 className="my-2">Beaf Meat Kabab</h4>
            <h3 className="mb-3">$456.99</h3>
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

        <div className="slider__box" onClick={() => navigate("/login")}>
          <p className="discount__percent">-39%</p>
          <div className="slider__img">
            <img
              src="https://i.ibb.co/F4rkCxW/12.png"
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
            <h4 className="my-2">Litchu Cake Juice</h4>
            <h3 className="mb-3">$45.98</h3>
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

        <div className="slider__box" onClick={() => navigate("/login")}>
          <div className="slider__img">
            <img
              src="https://i.ibb.co/ZVVYXyh/fruits.png"
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
            <h4 className="my-2">Kashmiri Chandal Fruits</h4>
            <h3 className="mb-3">$259.68</h3>
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

        <div className="slider__box" onClick={() => navigate("/login")}>
          <p className="discount__percent">-58%</p>
          <div className="slider__img">
            <img
              src="https://i.ibb.co/F4rkCxW/12.png"
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
            <h4 className="my-2">Litchu Cake Juice</h4>
            <h3 className="mb-3">$45.98</h3>
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
      </Carousel>
    </div>
  );
};

export default ProductSlider;

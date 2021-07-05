import { Link, navigate } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import HorizontalLine from "./HorizontalLine";
import Product from "./Product";
import SliderFunctionalities from "./SliderFunctionalities";

const ProductSectionWrapper = ({
  bannerTitle,
  bannerImg,
  bannerOfferTitle,
  bannerOfferRate,
  whichProduct,
  btnText,
  data,
  sliderArrows,
  sliderSpeed,
  sliderTransition
}) => {
  return (
    <main className="m-top__4">
      <div className="container">
        <div className="featured__product p__4 box__shadow bg-light">
          <div className="d-flex align-items-center justify-content-between py__2">
            <h1 className="section__title font-size__3 font-dark__green">{bannerTitle}</h1>
            <div className="sorting__flex align-items-center justify-content-between">
              <p className="sort">Sort By</p>
              <select name="sorting" className="sorting m-left__3">
                <option>Default</option>
                <option>Newest</option>
                <option>Oldest</option>
                <option>Highest Price</option>
                <option>Lowest Price</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="row m-top__4">
            <div className="col-md-3">
              <div
                className="product__banner"
                onClick={() => navigate("/shop")}
              >
                <div
                  className="banner"
                  style={{ background: `url(${bannerImg})` }}
                ></div>
                <div className="banner__content">
                  <h3>{bannerOfferTitle}</h3>
                  <h2>{bannerOfferRate}</h2>
                  <p>{whichProduct}</p>
                  <HorizontalLine
                    width="42px"
                    height="1px"
                    margin="25px auto"
                    background="#A8B324"
                  />
                  <Link to="/shop" className="banner__shop__link">
                    {btnText}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <SliderFunctionalities
                sliderArrows={sliderArrows}
                sliderSpeed={sliderSpeed}
                sliderTransition={sliderTransition}
              >
                {data.map((item, index) => (
                  <Product
                    key={index + 1}
                    productImg={`${item.img}`}
                    productName={`${item.name}`}
                    productPrice={`${item.price}`}
                    productSize={`${item.size}`}
                  />
                ))}
              </SliderFunctionalities>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductSectionWrapper;

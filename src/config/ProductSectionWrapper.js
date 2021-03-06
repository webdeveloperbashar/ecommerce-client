import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import { Link } from "@reach/router";
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
  sliderTransition,
}) => {
  return (
    <main className="m-top__4">
      <div className="container">
        <div className="featured__product p__4 bg-light">
          <div className="d-flex align-items-center justify-content-between py__2">
            <h1 className="section__title font-size__3 font-dark">
              {bannerTitle}
            </h1>
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
              <Link to="/">
                <div className="product__banner">
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
                      height="2px"
                      margin="25px auto"
                      background="rgb(103 188 15)"
                    />
                    <Link to="/shop" className="banner__shop__link">
                      {btnText}
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-9">
              <SliderFunctionalities
                sliderArrows={sliderArrows}
                sliderSpeed={sliderSpeed}
                sliderTransition={sliderTransition}
              >
                {data?.map((item, index) => (
                  <Product
                    key={index + 1}
                    product={item}
                    productId={item._id}
                    productImg={item.productImage ? item.productImage[0].url: null}
                    productName={`${item.name}`}
                    productPrice={`${item.price}`}
                    productSize={`${item.weight} ${item.unit}`}
                    productDiscount={`${item.discount}`}
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

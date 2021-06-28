import { Link, navigate } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import ProductSlider from "../config/ProductSlider";
import HorizontalLine from "./HorizontalLine";

const HomeProductSection = ({
  bannerTitle,
  bannerImg,
  bannerOfferTitle,
  bannerOfferRate,
  whichProduct,
  btnText
}) => {
  return (
    <main className="m-top__4">
      <div className="container">
        <div className="featured__product p__4 box__shadow bg-light">
          <div className="d-flex align-items-center justify-content-between py__2">
            <h1 className="font-size__3 font-dark__green">{bannerTitle}</h1>
            <div className="d-flex align-items-center justify-content-between">
              <p>Sort By</p>
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
                    height='3px'
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
              <ProductSlider />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeProductSection;

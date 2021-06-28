import { Link, navigate } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../assets/product-banner/banner-1.jpg";
import ProductSlider from "../config/ProductSlider";

const HomeProductSection = () => {
  return (
    <main className="m-top__4">
      <div className="container">
        <div className="featured__product p__4 box__shadow bg-light">
          <div className="d-flex align-items-center justify-content-between py__2">
            <h1 className="font-size__3 font-dark__green">Featured Products</h1>
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
                  style={{ background: `url(${banner1})` }}
                ></div>
                <div className="banner__content">
                  <h3>Hot Offer!</h3>
                  <h2>60% Of</h2>
                  <p>All Dairy Products</p>
                  <hr style={{ width: "42px", margin: "25px auto" }} />
                  <Link to="/shop" className="banner__shop__link">
                    Shop Now
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

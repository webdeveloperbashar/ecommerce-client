import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaHandHoldingUsd, FaMoneyCheckAlt, FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const SitePolicy = () => {
  return (
    <main>
      <div className="container">
        <div className="row m-top__4">
          <div className="col-md-3 p-right__0">
            <div className="d-flex align-items-center all__border p__4">
              <span>
                <FaHandHoldingUsd className="m-right__3 support__icon font-blue-gray" />
              </span>
              <span>
                <h1 className="font-size__2 font-blue-gray">Free Shipping</h1>
                <p className="m-top__2 font-blue-gray">Up To $699.99</p>
              </span>
            </div>
          </div>
          <div className="col-md-3 px__0">
            <div className="d-flex align-items-center all__border p__4">
              <span>
                <FaTruck className="m-right__3 support__icon font-blue-gray" />
              </span>
              <span>
                <h4 className="font-size__2 font-blue-gray">Fast Delivery</h4>
                <p className="m-top__2 font-blue-gray">Anywhere in your country</p>
              </span>
            </div>
          </div>
          <div className="col-md-3 px__0">
            <div className="d-flex align-items-center all__border p__4">
              <span>
                <FaMoneyCheckAlt className="m-right__3 support__icon font-blue-gray" />
              </span>
              <span>
                <h4 className="font-size__2 font-blue-gray">Money Back</h4>
                <p className="m-top__2 font-blue-gray">100% Guarantee</p>
              </span>
            </div>
          </div>
          <div className="col-md-3 p-left__0">
            <div className="d-flex align-items-center all__border p__4">
              <span>
                <GiReturnArrow className="m-right__3 support__icon font-blue-gray" />
              </span>
              <span>
                <h4 className="font-size__2 font-blue-gray">Product Return</h4>
                <p className="m-top__2 font-blue-gray">If you face any problem</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SitePolicy;

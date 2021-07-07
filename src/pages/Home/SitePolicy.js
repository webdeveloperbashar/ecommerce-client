import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaHandHoldingUsd, FaMoneyCheckAlt, FaTruck } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const SitePolicy = () => {
  return (
    <main>
      <div className="container">
        <div className="row policy__row m-top__4">
          <div className="col-md-3 policy-col-1">
            <div className="policy__box bg-light d-flex align-items-center all__border p__4">
              <span>
                <FaHandHoldingUsd className="m-right__3 support__icon font-olive-green" />
              </span>
              <span>
                <h1 className="font-size__1 font-blue-gray text-uppercase">Free Shipping</h1>
                <p className="m-top__2 font-blue-gray">Up To $699.99</p>
              </span>
            </div>
          </div>
          <div className="col-md-3 policy-col-2">
            <div className="policy__box bg-light d-flex align-items-center all__border p__4">
              <span>
                <FaTruck className="m-right__3 support__icon font-olive-green" />
              </span>
              <span>
                <h1 className="font-size__1 font-blue-gray text-uppercase">Fast Delivery</h1>
                <p className="m-top__2 font-blue-gray">
                  Anywhere in your country
                </p>
              </span>
            </div>
          </div>
          <div className="col-md-3 policy-col-3">
            <div className="policy__box bg-light d-flex align-items-center all__border p__4">
              <span>
                <FaMoneyCheckAlt className="m-right__3 support__icon font-olive-green" />
              </span>
              <span>
                <h1 className="font-size__1 font-blue-gray text-uppercase">Money Back</h1>
                <p className="m-top__2 font-blue-gray">100% Guarantee</p>
              </span>
            </div>
          </div>
          <div className="col-md-3 policy-col-4">
            <div className="policy__box bg-light d-flex align-items-center all__border p__4">
              <span>
                <GiReturnArrow className="m-right__3 support__icon font-olive-green" />
              </span>
              <span>
                <h1 className="font-size__1 font-blue-gray text-uppercase">Product Return</h1>
                <p className="m-top__2 font-blue-gray">
                  If you face any problem
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SitePolicy;

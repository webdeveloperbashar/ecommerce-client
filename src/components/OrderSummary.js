import { Link } from "@reach/router";
import React from "react";
import HorizontalLine from "./../config/HorizontalLine";

const OrderSummary = ({ button }) => {
  return (
    <div className="order__summery__table mt-3">
      <div className="d-flex align-items-center justify-content-between py-2">
        <span>Subtotal</span>
        <span>$135874</span>
      </div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <span>Tax</span>
        <span>5%</span>
      </div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <span>Delivery Charge</span>
        <span>$79</span>
      </div>
      <HorizontalLine
        width="100%"
        height="1px"
        margin="8px auto"
        background="#8080803b"
      />
      <div className="d-flex align-items-center justify-content-between py-2">
        <span className="font-size__1">Total</span>
        <span className="font-size__1">$14587</span>
      </div>
      {button && (
        <div className="mt-2">
          <Link to="/checkout" className="btn py-3 w-100 font-size__1">
            Process to checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;

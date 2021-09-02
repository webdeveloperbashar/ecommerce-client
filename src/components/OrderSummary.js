import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HorizontalLine from "./../config/HorizontalLine";

const OrderSummary = ({ button }) => {
  let subtotal = 0;
  const tax = 5;
  const deliveryCharge = 3;
  const cartItems = useSelector((state) => state.cart.cartItems);
  cartItems.forEach((pd) => {
    subtotal = subtotal + pd.price * pd.quantity;
  });
  const grandTotal = (
    (tax / 100) * subtotal +
    deliveryCharge +
    subtotal
  ).toFixed(2);
  return (
    <div className="order__summery__table mt-3">
      <div className="d-flex align-items-center justify-content-between py-2">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <span>Tax</span>
        <span>{tax}%</span>
      </div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <span>Delivery Charge</span>
        <span>${deliveryCharge}</span>
      </div>
      <HorizontalLine
        width="100%"
        height="1px"
        margin="8px auto"
        background="#8080803b"
      />
      <div className="d-flex align-items-center justify-content-between py-2">
        <span className="font-size__1">Grand Total</span>
        <span className="font-size__1">{grandTotal}</span>
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

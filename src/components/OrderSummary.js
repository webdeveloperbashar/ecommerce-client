import React from "react";
import { useSelector } from "react-redux";
import { navigate } from "@reach/router";
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
        <span>{subtotal ? "$" + subtotal.toFixed(2) : "N/A"}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <span>Tax</span>
        <span>{subtotal ? tax + "%" : "N/A"}</span>
      </div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <span>Shipping Fees</span>
        <span>{subtotal ? "$" + deliveryCharge : "N/A"}</span>
      </div>
      <HorizontalLine
        width="100%"
        height="1px"
        margin="8px auto"
        background="#8080803b"
      />
      <div className="d-flex align-items-center justify-content-between py-2">
        <span className="font-size__1">Grand Total</span>
        <span className="font-size__1">{subtotal ? `$${grandTotal}` : "N/A"}</span>
      </div>
      {button && (
        <div className="mt-2">
          <button
            className="btn w-100 py-3 font-size__1"
            onClick={()=>navigate("/checkout")}
            disabled={cartItems.length > 0 ? false : true}
          >
            {/* <Link to="/checkout" className=""> */}
            Process to checkout
            {/* </Link> */}
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;

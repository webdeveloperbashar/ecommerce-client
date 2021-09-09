import React, { useRef, useState } from "react";
import { FiPrinter } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import Print from "./Print";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { OrderTrackingActions } from "../../Store/Actions/OrderTrackingActions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const OrderTracking = ({ trackingOrder }) => {
  const tracking = trackingOrder.trackingOrder;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // subtotal and total price calculate
  let subtotal = 0;
  tracking.product?.forEach((item) => {
    subtotal = subtotal + parseFloat(item.price) * parseFloat(item.quantity);
  });
  const grandTotal =
    (tracking.tax / 100) * subtotal + subtotal + tracking.shippingFees;
  // order tracking form
  const [formData, setFormData] = useState({
    orderTracking: tracking ? tracking.orderId : "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // react redux hooks
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.orderTracking) {
      toast.error("Order ID is required", {
        pauseOnHover: false,
      });
    } else {
      dispatch(OrderTrackingActions(formData.orderTracking));
    }
  };
  return (
    <div className="orderTracking__wrapper">
      <div className="account__heading d-flex align-items-center justify-content-between">
        <h2>Order Tracking</h2>
      </div>
      <hr />
      <div className="tracking__form">
        <form onSubmit={handleSubmit}>
          <div className="form-group d-flex align-items-center justify-content-between">
            <input
              type="text"
              name="orderTracking"
              value={formData.orderTracking}
              onChange={handleChange}
              className="form-control input__field tracking__field"
              placeholder="Enter your order ID"
            />
            <button type="submit" className="btn tracking__btn">
              Track your order
            </button>
          </div>
        </form>
      </div>
      <div className="tracking__product mt-5">
        {tracking.orderId && (
          <>
            <div className="tracking__header d-flex justify-content-between">
              <div className="tracking__header__left">
                <h2>Order ID: {tracking.orderId}</h2>
                <p>{tracking.orderDate}</p>
              </div>
              <div className="tracking__header__right">
                <button
                  onClick={handlePrint}
                  className="btn d-flex align-items-center justify-content-between"
                >
                  <FiPrinter fontSize="15px" className="me-2 text-white" />
                  Print Invoice
                </button>
                <div className="invoice__source">
                  <Print ref={componentRef} trackingOrder={trackingOrder} />
                </div>
              </div>
            </div>
            <div className="tracking__product__info">
              <div className="single__info__field box__shadow mt-3">
                <div className="info__header text-white p-2">
                  <h2 className="text-start">Order Status</h2>
                </div>
                <div className="tracking__summary">
                  <Stepper activeStep={0} alternativeLabel>
                    <Step>
                      <StepLabel>Pending</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>Processing</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>Shipped</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel>Deliverd</StepLabel>
                    </Step>
                  </Stepper>
                </div>
              </div>
              <div className="single__info__field box__shadow mt-3">
                <div className="info__header text-white p-2">
                  <h2 className="text-start">Order Summary</h2>
                </div>
                <div className="tracking__summary">
                  <table>
                    <tbody>
                      <tr>
                        <td className="font-size__1">Order ID:</td>
                        <td>{tracking.orderId}</td>
                        <td className="font-size__1">Phone:</td>
                        <td>{tracking.shipping.mobile}</td>
                      </tr>
                      <tr>
                        <td className="font-size__1">Order Date:</td>
                        <td>{tracking.orderDate}</td>
                        <td className="font-size__1">Shipping Address:</td>
                        <td>{tracking.shipping.address}</td>
                      </tr>
                      <tr>
                        <td className="font-size__1">Payment Method:</td>
                        <td>{tracking.payment.methodName}</td>
                        <td className="font-size__1">Zip Code:</td>
                        <td>{tracking.shipping.zip}</td>
                      </tr>
                      <tr>
                        <td className="font-size__1">Payment Status:</td>
                        <td>{tracking.paymentStatus}</td>
                        <td className="font-size__1">State:</td>
                        <td>{tracking.shipping.state}</td>
                      </tr>
                      <tr>
                        <td className="font-size__1">Order Status:</td>
                        <td>{tracking.orderStatus}</td>
                        <td className="font-size__1">City:</td>
                        <td>{tracking.shipping.city}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="single__info__field box__shadow mt-3">
                <div className="info__header text-white p-2">
                  <h2 className="text-start">Order Details</h2>
                </div>
                <div className="tracking__details">
                  <table>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tracking.product.map((item) => (
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.img}
                                className="img-fluid logo me-2"
                                alt={item.name}
                              />
                              <p>{item.name}</p>
                            </div>
                          </td>
                          <td>
                            ${item.price} X {item.quantity}
                          </td>
                          <td>${item.price * item.quantity}</td>
                        </tr>
                      ))}
                      <tr>
                        <td>Subtotal:</td>
                        <td></td>
                        <td>${subtotal}</td>
                      </tr>
                      <tr>
                        <td>Tax:</td>
                        <td></td>
                        <td>{tracking.tax}%</td>
                      </tr>
                      <tr>
                        <td>Shipping Fees:</td>
                        <td></td>
                        <td>${tracking.shippingFees}</td>
                      </tr>
                      <tr>
                        <td>Total Price:</td>
                        <td></td>
                        <td>${grandTotal.toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    trackingOrder: state.trackingOrder,
  };
};
export default connect(mapStateToProps, null)(OrderTracking);

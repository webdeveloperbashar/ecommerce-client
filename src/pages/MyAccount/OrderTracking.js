import React, { useRef } from "react";
import { FiPrinter } from "react-icons/fi";
import { useReactToPrint } from "react-to-print";
import Print from "./Print";
import { Stepper } from "react-form-stepper";
import { Step } from "react-form-stepper";
const OrderTracking = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="orderTracking__wrapper">
      <div className="account__heading d-flex align-items-center justify-content-between">
        <h2>Order Tracking</h2>
      </div>
      <hr />
      <div className="tracking__form">
        <form>
          <div className="form-group d-flex align-items-center justify-content-between">
            <input
              type="text"
              name="tracking"
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
        <div className="tracking__header d-flex justify-content-between">
          <div className="tracking__header__left">
            <h2>Order ID: GVS-25874896</h2>
            <p>15 Jul, 2021 || 12:30 PM</p>
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
              <Print ref={componentRef} />
            </div>
          </div>
        </div>
        <div className="tracking__product__info">
          <div className="single__info__field box__shadow mt-3">
            <div className="info__header text-white p-2">
              <h2 className="text-start">Order Status</h2>
            </div>
            <div className="tracking__summary">
              <Stepper activeStep={0}>
                <Step label="Pending" />
                <Step label="Processing" />
                <Step label="Shipped" />
                <Step label="Deliverd" />
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
                    <td className="font-size__1">Order Date:</td>
                    <td>17 July, 2021 || 12:30PM</td>
                    <td className="font-size__1">Name:</td>
                    <td>MD Hasan Mia</td>
                  </tr>
                  <tr>
                    <td className="font-size__1">Order ID:</td>
                    <td>GVS-25874896</td>
                    <td className="font-size__1">Phone:</td>
                    <td>01723658745</td>
                  </tr>
                  <tr>
                    <td className="font-size__1">Payment Method:</td>
                    <td>Stripe</td>
                    <td className="font-size__1">Shipping Address:</td>
                    <td>Purulia, Gurudaspur, Natore</td>
                  </tr>
                  <tr>
                    <td className="font-size__1">Order Status:</td>
                    <td>Pending</td>
                    <td className="font-size__1">Zip Code:</td>
                    <td>6400</td>
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
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://i.ibb.co/F4rkCxW/12.png"
                          className="img-fluid logo me-2"
                          alt="product"
                        />
                        <p>Kashmiri Fruits</p>
                      </div>
                    </td>
                    <td>$250 X 2</td>
                    <td>$500</td>
                  </tr>
                  <tr>
                    <td>Total Price:</td>
                    <td></td>
                    <td>$550</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;

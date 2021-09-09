import React from "react";
import logo from "../../assets/images/brand-logo/valley.svg";
import getDataFromLocalhost from "../../config/GetLocalhostData";
class Print extends React.PureComponent {
  render() {
    const tracking = this.props.trackingOrder.trackingOrder;
    let subtotal = 0;
    tracking.product.forEach((item) => {
      subtotal = subtotal + parseFloat(item.price) * item.quantity;
    });
    const grandTotal = tracking.tax / 100 * subtotal + subtotal + tracking.shippingFees;
    return (
      <div className="order__invoice p-4">
        <div className="invoice__header d-flex align-items-center justify-content-between">
          <img src={logo} className="img-fluid logo" alt="logo" />
          <div className="company__address text-end">
            <h2>Green Valley Grocery</h2>
            <p>Banasree, Rampura</p>
            <p>Dhaka-1206, Bangladesh</p>
            <p>greenvalleygrocery@gmail.com</p>
          </div>
        </div>
        <div className="invoice__address py-1 d-flex justify-content-between">
          <div className="invoice__date text-start">
            <h2>Invoice: {tracking.orderId}</h2>
            <p>Invoice Date: {tracking.orderDate}</p>
            <p>
              Due Date:&nbsp;
              {new Date().toString().split(" ").splice(1, 3).join(" ")},
              {new Date().toLocaleTimeString()}
            </p>
          </div>
          <div className="user__address text-end">
            <h2>Invoice To</h2>
            <p>ATTN: {getDataFromLocalhost("user").name}</p>
            <p>
              {tracking.shipping.address},&nbsp;{tracking.shipping.city}-
              {tracking.shipping.zip}
            </p>
            <p>Mobile: {tracking.shipping.mobile}</p>
          </div>
        </div>
        <div className="product__details mt-5">
          <table>
            <thead>
              <tr>
                <th>Payment Method</th>
                <th>{tracking.payment.methodName}</th>
              </tr>
              <tr>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {tracking.product.map((item) => (
                <tr>
                  <td>
                    {item.name} X {item.quantity}
                  </td>
                  <td>
                    ${item.price} X {item.quantity}
                  </td>
                </tr>
              ))}
              <tr className="cover__price">
                <td className="text-end">Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr className="cover__price">
                <td className="text-end">Tax</td>
                <td>{tracking.tax}%</td>
              </tr>
              <tr className="cover__price">
                <td className="text-end">Shipping Fees</td>
                <td>${tracking.shippingFees}</td>
              </tr>
              <tr className="cover__price">
                <td className="text-end">Grand Total</td>
                <td>${grandTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Print;

import React from "react";
import logo from "../../assets/images/brand-logo/valley.svg";
class Print extends React.PureComponent {
  render() {
    return (
      <div className="order__invoice p-4">
        <div className="invoice__header d-flex align-items-center justify-content-between">
          <img src={logo} className="img-fluid logo" alt="logo" />
          <div className="company__address text-end">
            <h2>Green Valley Grocery</h2>
            <p>Banasree, Rampura</p>
            <p>Dhaka-1206, Bangladesh</p>
            <p>support@greenvalley.com</p>
          </div>
        </div>
        <div className="invoice__address py-1 d-flex justify-content-between">
          <div className="invoice__date text-start">
            <h2>Invoice: GVG-589875</h2>
            <p>Invoice Date: 16/07/2021</p>
            <p>Due Date: 16/07/2021</p>
          </div>
          <div className="user__address text-end">
            <h2>Invoice To</h2>
            <p>ATTN: MD Hasan Mia</p>
            <p>Purulia, Gurudaspur, Natore-6400</p>
            <p>Mobile: 01700000000</p>
          </div>
        </div>
        <div className="product__details mt-5">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Price</th>
              </tr>
              <tr>
                <th>Payment Method</th>
                <th>Stripe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>kashmiri Fruits X 2</td>
                <td>$254 X 2</td>
              </tr>
              <tr>
                <td>Dragon Fruits X 3</td>
                <td>$158 X 3</td>
              </tr>
              <tr className="cover__price">
                <td className="text-end">Subtotal</td>
                <td>$895</td>
              </tr>
              <tr className="cover__price">
                <td className="text-end">Tax</td>
                <td>5%</td>
              </tr>
              <tr className="cover__price">
                <td className="text-end">Delivery Charge</td>
                <td>$20</td>
              </tr>
              <tr className="cover__price">
                <td className="text-end">Grand Total</td>
                <td>$1548</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Print;

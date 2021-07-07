import { Link, navigate } from "@reach/router";
import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { FaEdit } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import shortid from "shortid";
import cateImg from "../../assets/Cate-image/cateImg-3.jpg";
import DataTable from "../../components/Data-table";
import ActionCell from "../../components/Data-table/Action-cell";
import ImageCell from "../../components/Data-table/Image-cell";
import TextCell from "../../components/Data-table/Text-Cell";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import ToastNotification from "../../components/Notification/ToastNotification";
import HorizontalLine from "../../config/HorizontalLine";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  const [showNotify, setShowNotify] = useState(false);
  const notifyClose = () => setShowNotify(false);
  window.setTimeout(() => {
    setShowNotify(false);
  }, 5000);

  const [editable, setEditable] = useState({});

  // data table data send
  const theadItems = [
    <TextCell key="image" text="Image" as="th" />,
    <TextCell key="name" text="Product Name" as="th" />,
    <TextCell key="quantity" text="Quantity" as="th" />,
    <TextCell key="price" text="Price" as="th" />,
    <TextCell key="action" text="Action" as="th" className="text-end" />,
  ];
  const tbodyItems = [
    [
      <ImageCell
        key={shortid.generate()}
        className="table__product__img"
        as="td"
        actions={[
          {
            name: "image",
            image: cateImg,
          },
        ]}
      />,
      <TextCell key="name" text="Alu Vaji" as="td" />,
      <TextCell key="quantity" text="2" as="td" />,
      <TextCell key="price" text="$25" as="td" />,
      <ActionCell
        key="action"
        className="text-end action__button"
        actions={[
          {
            name: "Delete",
            icon: <MdDelete />,
            handler: () => {
              setShowNotify(true);
            },
            className: 'action__button'
          },
          {
            name: "Edit",
            icon: editable ? (
              <FaEdit className="text-success" />
            ) : (
              <FcCheckmark />
            ),
            handler: () => {
              setEditable(!editable);
            },
            className: 'action__button'
          },
        ]}
        as="td"
      />,
    ],
  ];
  return (
    <>
      <ToastNotification
        message="Product remove from cart"
        success
        showNotify={showNotify}
        notifyClose={notifyClose}
      />
      {device.isDesktop && <Nav isShow />}
      <div className="cart__wrapper">
        <div className="cart__section__image">
          <h2 className="text-center">Cart</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="cart__list box__shadow bg-light p__2 mt-5 mb-4">
                <DataTable
                  theadItems={theadItems}
                  tbodyItems={tbodyItems}
                  noItemMsg="There is no product"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <button className="btn py-3 text-capitalize" onClick={()=>navigate("/")}>Return to shop</button>
                </div>
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter coupon code"
                  />
                  <button type="submit" className="btn">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cart__totals box__shadow bg-light p__2 mt-5 mb-4">
                <h2 className="text-dark font-size__2 py-1">Cart Totals</h2>
                <HorizontalLine
                  width="100%"
                  height="1px"
                  margin="8px auto"
                  background="#8080803b"
                />
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
                  <div className="mt-2">
                    <Link to="/checkout" className="btn py-3 w-100 font-size__1">
                      Process to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

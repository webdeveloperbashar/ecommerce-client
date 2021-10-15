import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "@reach/router";
import shortid from "shortid";
import DataTable from "../../components/Data-table";
import ActionCell from "../../components/Data-table/Action-cell";
import ImageCell from "../../components/Data-table/Image-cell";
import TextCell from "../../components/Data-table/Text-Cell";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import OrderSummary from "../../components/OrderSummary";
import HorizontalLine from "../../config/HorizontalLine";
import {
  DecreamentQuantityAction,
  IncreaseQuantityAction,
  RemoveCartAction,
} from "../../Store/Actions/CartAction";
const Index = () => {
  // get data from react-redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  // react-redux hooks
  const dispatch = useDispatch();
  // device breakpoints
  const device = useBreakpoints();
  // data table data send
  const theadItems = [
    <TextCell key="image" text="Image" as="th" />,
    <TextCell key="name" text="Product Name" as="th" />,
    <TextCell key="quantity" text="Quantity" as="th" />,
    <TextCell key="price" text="Price" as="th" />,
    <TextCell key="action" text="Action" as="th" className="text-end" />,
  ];
  const tbodyItems = cartItems.map((item) => [
    [
      <ImageCell
        key={shortid.generate()}
        className="table__product__img"
        as="td"
        actions={[
          {
            name: "image",
            image: item.productImage[0].url,
          },
        ]}
      />,
      <TextCell key={shortid.generate()} text={item.name} as="td" />,
      <TextCell
        key="quantity"
        text={item.quantity}
        input="input"
        actions={[
          {
            name: "minus",
            icon: "-",
            handler: () => {
              dispatch(DecreamentQuantityAction(item));
            },
          },
          {
            name: "value",
            icon: item.quantity,
            className: "bg-light",
          },
          {
            name: "plus",
            icon: "+",
            handler: () => {
              dispatch(IncreaseQuantityAction(item));
            },
          },
        ]}
      />,
      <TextCell key="price" text={`$${item.price}`} as="td" />,
      <ActionCell
        key="action"
        className="text-end action__button"
        actions={[
          {
            name: "Delete",
            icon: <MdDelete />,
            className: "action__button",
            handler: () => {
              dispatch(RemoveCartAction(item));
            },
          },
        ]}
        as="td"
      />,
    ],
  ]);
  return (
    <>
      <Helmet>
        <title>My cart - Green Valley Grocery Shop</title>
      </Helmet>
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
                  colSpan="5"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="form-group">
                  <Link to="/">
                    <button className="btn return__shop text-capitalize">
                      Return to shop
                    </button>
                  </Link>
                </div>
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control input__field mb-0"
                    placeholder="Enter coupon code"
                  />
                  <button type="submit" className="btn mb-0 input__field">
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
                <OrderSummary button />
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

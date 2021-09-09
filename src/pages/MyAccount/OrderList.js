import React, { useEffect } from "react";
// import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import AmountCell from "../../components/Data-table/AmountCell";
import { OrderGetActions } from "../../Store/Actions/OrderActions";
import DataTable from "./../../components/Data-table/index";
import TextCell from "./../../components/Data-table/Text-Cell";
const OrderList = ({ orderData, orderFetch }) => {
  // order fetch
  useEffect(() => {
    orderFetch();
  }, [orderFetch]);
  // table head
  const theadItems = [
    <TextCell key="orderid" text="Order ID" as="th" className="text-start" />,
    <TextCell
      key="orderdate"
      text="Order Date"
      as="th"
      className="text-center"
    />,
    <TextCell key="amount" text="Amount" as="th" className="text-center" />,
    <TextCell
      key="paymentmethod"
      text="Payment Method"
      as="th"
      className="text-center"
    />,
    <TextCell key="status" text="Order Status" as="th" className="text-end" />,
    <TextCell
      key="status"
      text="Payment Status"
      as="th"
      className="text-end"
    />,
  ];
  // table body items
  // let subtotal = 0;
  const tbodyItems = orderData.map((order) => [
    [
      <TextCell
        key={order.orderId}
        text={order.orderId}
        as="td"
        className="text-start"
      />,
      <TextCell
        key={order.orderDate}
        text={order.orderDate}
        as="td"
        className="text-center"
      />,
      <AmountCell
        key={order.product}
        items={order.product}
        tax={order.tax}
        shippingFees={order.shippingFees}
        as="td"
        className="text-center"
      />,
      <TextCell
        key={order.payment.methodName}
        text={order.payment.methodName}
        as="td"
        className="text-center"
      />,
      <TextCell
        key={order.orderStatus}
        text={order.orderStatus}
        as="td"
        className="text-center"
      />,
      <TextCell
        key={order.orderStatus}
        text={order.paymentStatus}
        as="td"
        className="text-end"
      />,
    ],
  ]);
  return (
    <div className="orderList__wrapper">
      <div className="account__heading">
        <h2 className="text-start">Your Orders</h2>
      </div>
      <hr />
      <DataTable
        theadItems={theadItems}
        tbodyItems={tbodyItems}
        noItemMsg="There is no order"
        colSpan="6"
      />
      {/* <ReactPaginate/> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orderData: state.orders.orders,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    orderFetch: () => dispatch(OrderGetActions()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);

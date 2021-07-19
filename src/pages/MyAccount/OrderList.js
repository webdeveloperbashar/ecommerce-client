import React from "react";
import DataTable from "./../../components/Data-table/index";
import TextCell from "./../../components/Data-table/Text-Cell";
const OrderList = () => {
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
    <TextCell key="status" text="Status" as="th" className="text-end" />,
  ];
  const tbodyItems = [
    [
      <TextCell key="gvs" text="GVS-54872548" as="td" className="text-start" />,
      <TextCell
        key="date"
        text="12 July, 2021"
        as="td"
        className="text-center"
      />,
      <TextCell key="price" text="$2568" as="td" className="text-center" />,
      <TextCell key="cod" text="COD" as="td" className="text-center" />,
      <TextCell key="pending" text="Pending" as="td" className="text-end" />,
    ],
    [
      <TextCell key="gvs" text="GVS-87569874" as="td" className="text-start" />,
      <TextCell
        key="date"
        text="13 July, 2021"
        as="td"
        className="text-center"
      />,
      <TextCell key="price" text="$58748" as="td" className="text-center" />,
      <TextCell key="cod" text="COD" as="td" className="text-center" />,
      <TextCell
        key="completed"
        text="Completed"
        as="td"
        className="text-end"
      />,
    ],
  ];
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
      />
    </div>
  );
};

export default OrderList;

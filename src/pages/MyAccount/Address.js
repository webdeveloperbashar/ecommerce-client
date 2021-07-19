import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DataTable from "../../components/Data-table";
import ActionCell from "../../components/Data-table/Action-cell";
import TextCell from "../../components/Data-table/Text-Cell";
import ReactModal from "../../components/React-Modal";

const Address = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const theadItems = [
    <TextCell key="name" text="Name" as="th" className="text-start" />,
    <TextCell key="phone" text="Mobile" as="th" className="text-start" />,
    <TextCell key="state" text="State" as="th" className="text-start" />,
    <TextCell key="city" text="City" as="th" className="text-start" />,
    <TextCell key="zip" text="Zip" as="th" className="text-start" />,
    <TextCell key="address" text="Address" as="th" className="text-start" />,
    <TextCell key="action" text="Action" as="th" className="text-start" />,
  ];
  const tbodyitems = [
    [
      <TextCell
        key="name1"
        text="MD Abul Bashar"
        as="td"
        className="text-start"
      />,
      <TextCell
        key="phone1"
        text="017200000025"
        as="td"
        className="text-start"
      />,
      <TextCell key="state1" text="Rajshahi" as="td" className="text-start" />,
      <TextCell key="name2" text="Natore" as="td" className="text-start" />,
      <TextCell key="name3" text="6400" as="td" className="text-start" />,
      <TextCell
        key="name"
        text="Purulia, Gurudaspur, Natore"
        as="td"
        className="text-start"
      />,
      <ActionCell
        key="actions2"
        className="text-start"
        actions={[
          {
            name: "Edit",
            icon: <FaEdit />,
            handler: () => {
              console.log("Address Edit");
            },
            className: "action__button text-success",
          },
          {
            name: "Delete",
            icon: <MdDelete />,
            handler: () => {
              console.log("Address Remove");
            },
            className: "action__button",
          },
        ]}
        as="td"
      />,
    ],
  ];
  return (
    <>
      <ReactModal
        handleClose={onCloseModal}
        handleOpen={open}
        text="Add Address"
      />
      <div className="address__wrapper">
        <div className="account__heading d-flex align-items-center justify-content-between">
          <h2 className="text-start">Your Address</h2>
          <button className="btn" onClick={onOpenModal}>
            Add New
          </button>
        </div>
        <hr />
        <div style={{ overflowX: "auto" }}>
          <DataTable
            theadItems={theadItems}
            tbodyItems={tbodyitems}
            colSpan="6"
            noItemMsg="There is no any address"
          />
        </div>
      </div>
    </>
  );
};

export default Address;

import React from "react";

const PaymentField = ({ methodName, handleChange }) => {
  return (
    <>
      {methodName === "bkash" ||
      methodName === "nagad" ||
      methodName === "rocket" ? (
        <>
          <div className="form-group my-2">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="number"
              name="accountNumber"
              className="form-control py-1 my-1"
              placeholder="Enter your account number"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="trxId">Transaction ID</label>
            <input
              type="text"
              name="trxId"
              className="form-control py-1 my-1 mb-3"
              placeholder="Enter your TRX Id"
              onChange={handleChange}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default PaymentField;

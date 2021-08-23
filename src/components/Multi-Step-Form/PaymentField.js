import React from "react";

const PaymentField = ({ payment, handleChange }) => {
  return (
    <>
      {payment === "bkash" || payment === "nagad" || payment === 'rocket' ? (
        <>
          <div className="form-group my-2">
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="number"
              name="name"
              className="form-control py-1 my-1"
              placeholder="Enter your account number"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="trxId">Transaction ID</label>
            <input
              type="text"
              name="trxid"
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import getDataFromLocalhost from "../../config/GetLocalhostData";
import Validate from "../../config/Validate";
import { FormInputFieldData } from "../../pages/Checkout/FormInputFieldData";
import { OrderCreateActions } from "../../Store/Actions/OrderActions";
import PaymentField from "./PaymentField";
import Step from "./Step";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
// import Cookies from "js-cookie";
const Form = ({ step, setStep, cartItems }) => {
  const [completed, setCompleted] = useState(false);
  // react-redux hooks
  const dispatch = useDispatch();
  // form data grapping state
  const [formData, setFormData] = useState(FormInputFieldData);
  // handle payment method name gassing
  const [paymentField, setPaymentField] = useState({
    accountNumber: "",
    trxId: "",
  });
  const [methodName, setMethodName] = useState("");
  const handleMethodName = (e) => {
    setMethodName(e.target.value);
  };
  // payment field data get
  const handlePaymentField = (e) => {
    setPaymentField({
      ...paymentField,
      [e.target.name]: e.target.value,
    });
  };
  // shipping and payment submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // shipping address data
    const formDatas = {};
    formDatas.mobile = formData.stepOne.mobile.value;
    formDatas.state = formData.stepOne.state.value;
    formDatas.city = formData.stepOne.city.value;
    formDatas.zip = formData.stepOne.zip.value;
    formDatas.country = formData.stepOne.country.value;
    formDatas.address = formData.stepOne.address.value;
    // shipping and payment address
    const order = {
      orderId: `GVG-${new Date().getTime().toString().slice(5)}`,
      orderDate: `${new Date()
        .toString()
        .split(" ")
        .splice(1, 3)
        .join(" ")}, ${new Date().toLocaleTimeString()}`,
      orderStatus: "Pending",
      paymentStatus: "Pending",
      email: getDataFromLocalhost("user").Email,
      tax: 5,
      shippingFees: 3,
      shipping: { ...formDatas },
      product: cartItems,
      payment: { ...paymentField, methodName },
    };
    setCompleted(true);
    dispatch(OrderCreateActions(order, setStep, step, setCompleted));
  };
  // shipping address input handle change
  const handleChange = (step, e) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        [e.target.name]: {
          ...prev[step][e.target.name],
          value: e.target.value,
        },
      },
    }));
  };
  // step change and error handling for shipping address
  const [errors, setErrors] = useState({});
  const stepHandleChange = (values, e) => {
    e.preventDefault();
    const newError = Validate(values);
    setErrors(newError);
    if (Object.keys(newError).length === 0) {
      setStep(step + 1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Shipping address */}
      {step === 0 && (
        <Step
          key="stepOne"
          data={formData.stepOne}
          onChange={handleChange}
          onStepChange={stepHandleChange}
          error={errors}
          stepKey="stepOne"
          step={1}
          onPrevStep={(step) => setStep(step)}
        />
      )}
      {/* payment method */}
      {step === 1 && (
        <>
          <label htmlFor="heading" className="mb-2 paymentStepHeading">
            Payment Method
          </label>
          <select
            name="methodName"
            className="form-control py-1 mb-3"
            onChange={handleMethodName}
          >
            <option value="choose">Select Payment Method</option>
            <option value="bkash">Bkash</option>
            <option value="nagad">Nagad</option>
            <option value="rocket">Rocket</option>
          </select>

          <PaymentField
            methodName={methodName}
            handleChange={handlePaymentField}
          />
        </>
      )}
      {/* place order preview */}
      {step === 2 && (
        <div className="place_order_preview">
          <div className="shipping_view">
            <h2 className="section__title font-size__3">Shipping Address</h2>
            <div className="my-2 shipping_info">
              <div className="signle__content my-1 d-flex align-items-center">
                <span className="label">Address:</span>
                <input
                  type="text"
                  className="form-control input__field mb-0 w-50"
                  value={formData.stepOne.address.value}
                  disabled
                />
              </div>
              <div className="signle__content my-1 d-flex align-items-center">
                <span className="label">Mobile:</span>
                <input
                  type="text"
                  className="form-control input__field mb-0 w-50"
                  value={formData.stepOne.mobile.value}
                  disabled
                />
              </div>
              <div className="signle__content my-1 d-flex align-items-center">
                <span className="label">State:</span>
                <input
                  type="text"
                  className="form-control input__field mb-0 w-50"
                  value={formData.stepOne.state.value}
                  disabled
                />
              </div>
              <div className="signle__content my-1 d-flex align-items-center">
                <span className="label">City:</span>
                <input
                  type="text"
                  className="form-control input__field mb-0 w-50"
                  value={formData.stepOne.city.value}
                  disabled
                />
              </div>
              <div className="signle__content my-1 d-flex align-items-center">
                <span className="label">Zip:</span>
                <input
                  type="text"
                  className="form-control input__field mb-0 w-50"
                  value={formData.stepOne.zip.value}
                  disabled
                />
              </div>
              <div className="signle__content my-1 d-flex align-items-center">
                <span className="label">Country:</span>
                <input
                  type="text"
                  className="form-control input__field mb-0 w-50"
                  value={formData.stepOne.country.value}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="payment_view">
            <h2 className="section__title font-size__3">Payment</h2>
            <div className="signle__content my-1 d-flex align-items-center">
              <span className="label">Methon Name:</span>
              <input
                type="text"
                className="form-control input__field mb-0 w-50"
                value={methodName}
                disabled
              />
            </div>
            <div className="signle__content my-1 d-flex align-items-center">
              <span className="label">Account Number:</span>
              <input
                type="text"
                className="form-control input__field mb-0 w-50"
                value={paymentField?.accountNumber}
                disabled
              />
            </div>
            <div className="signle__content my-1 d-flex align-items-center">
              <span className="label">TRX Id:</span>
              <input
                type="text"
                className="form-control input__field mb-0 w-50"
                value={paymentField?.trxId}
                disabled
              />
            </div>
          </div>
        </div>
      )}
      {/* Confirmation message */}
      {step === 3 && (
        <div className="confirm__msg">
          <span className="confirmation_icon">
            <IoMdCheckmarkCircleOutline />
          </span>
          <h2 className="text-center">Your order is confirmed !</h2>
          <p className="text-center">
            Thanks for your order! You will receive a recipeint of your order on
            your email.
          </p>
        </div>
      )}

      {/* previous button */}
      {step >= 1 && step < 3 && (
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="btn me-4"
          disabled={completed ? true : false}
        >
          Previous
        </button>
      )}
      {/* next button */}
      {step < 2 && (
        <button
          type="button"
          className="btn"
          onClick={(e) => stepHandleChange(formData.stepOne, e)}
          disabled={cartItems.length > 0 ? false : true}
        >
          Next
        </button>
      )}
      {/* place order button */}
      {step === 2 && (
        <button
          type="submit"
          className="btn"
          disabled={completed ? true : false}
        >
          Place Order
        </button>
      )}
    </form>
  );
};

export default Form;

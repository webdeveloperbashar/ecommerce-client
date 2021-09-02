import React, { useState } from "react";
import { useDispatch } from "react-redux";
import getDataFromLocalhost from "../../config/GetLocalhostData";
import Validate from "../../config/Validate";
import { FormInputFieldData } from "../../pages/Checkout/FormInputFieldData";
import { OrderCreateActions } from "../../Store/Actions/OrderActions";
import PaymentField from "./PaymentField";
import Step from "./Step";

const Form = ({ step, setStep, cartItems }) => {
  // react-redux hooks
  const dispatch = useDispatch();
  // form data grapping state
  const [formData, setFormData] = useState(FormInputFieldData);
  // handle payment method name gassing
  const [paymentField, setPaymentField] = useState();
  const [methodName, setMethodName] = useState("");
  const handlePayment = (e) => {
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
    formDatas.name = formData.stepOne.name.value;
    formDatas.mobile = formData.stepOne.mobile.value;
    formDatas.company = formData.stepOne.company.value;
    formDatas.state = formData.stepOne.state.value;
    formDatas.city = formData.stepOne.city.value;
    formDatas.zip = formData.stepOne.zip.value;
    formDatas.country = formData.stepOne.country.value;
    formDatas.address = formData.stepOne.address.value;
    // shipping and payment address
    const order = {
      orderId: new Date().getTime().toString().slice(5),
      orderDate: `${new Date()
        .toString()
        .split(" ")
        .splice(1, 3)
        .join(" ")}, ${new Date().toLocaleTimeString()}`,
      orderStatus: "Pending",
      paymentStatus: "Paid",
      email: getDataFromLocalhost("user").Email,
      tax: 5,
      shippingFees: 3,
      shipping: { ...formDatas },
      product: cartItems,
      payment: { ...paymentField, methodName },
    };
    if (
      methodName === "bkash" ||
      methodName === "nagad" ||
      methodName === "rocket"
    ) {
      dispatch(OrderCreateActions(order));
      setStep(step + 1);
    }
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
      {step === 1 && (
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
      {step === 2 && (
        <>
          <label htmlFor="heading" className="mb-2 paymentStepHeading">
            Payment Method
          </label>
          <select
            name="methodName"
            className="form-control py-1 mb-3"
            onChange={handlePayment}
          >
            <option value="choose">Select Payment Method</option>
            <option value="bkash">Bkash</option>
            <option value="nagad">Nagad</option>
            <option value="rocket">Rocket</option>
            <option value="cod">COD</option>
            <option value="stripe">Stripe</option>
          </select>
          <PaymentField
            methodName={methodName}
            handleChange={handlePaymentField}
          />
        </>
      )}
      {/* Confirmation message */}
      {step === 3 && (
        <div className="confirm__msg">
          <h2 className="text-center">Your order is confirmed !</h2>
          <p className="text-center">
            Thanks for your order! You will receive a recipeint of your order on
            your email.
          </p>
        </div>
      )}
      {/* Submit button */}
      {step === 2 && (
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="btn me-4"
        >
          Previous
        </button>
      )}
      {step === 2 && (
        <button type="submit" className="btn">
          Place Order
        </button>
      )}
    </form>
  );
};

export default Form;

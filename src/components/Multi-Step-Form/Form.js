import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Validate from "../../config/Validate";
import { FormInputFieldData } from "../../pages/Checkout/FormInputFieldData";
import PaymentField from "./PaymentField";
import Step from "./Step";

const Form = ({ step, setStep }) => {
  const stripe = useStripe();
  const elements = useElements();
  // form data grapping state
  const [formData, setFormData] = useState(FormInputFieldData);
  // payment card status check state
  const [brand, setBrand] = useState({
    brand: "",
  });
  // handle payment method name gassing
  const [payment, setPayment] = useState("");
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };
  // get payment method name
  const paymentHandleChange = (e) => {
    setBrand({
      brand: e.brand,
    });
  };
  // shipping and payment submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (!stripe || !elements) {
    //   return;
    // }
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
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
    // shipping and payment address marge
    const shipping = {
      shipping: { ...formDatas },
    };
    // payment error and success handling
    if (error) {
      // setStep(2);
      toast.error(error.message, {
        pauseOnHover: false,
      });
    }
    if (
      paymentMethod ||
      payment === "bkash" ||
      payment === "nagad" ||
      payment === "rocket"
    ) {
      console.log("Form data", shipping);
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
            name="payment"
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
          <PaymentField payment={payment} />
          {payment === "stripe" && (
            <>
              <label className="w-100" style={{ position: "relative" }}>
                Card number
                <CardNumberElement
                  onChange={paymentHandleChange}
                  className="form-control my-2 py-2 w-100"
                />
                {brand && (
                  <span
                    style={{ position: "absolute", right: "6px", top: "32px" }}
                  >
                    {brand.brand}
                  </span>
                )}
              </label>
              <label className="w-100">
                Expiration date
                <CardExpiryElement className="form-control my-2 py-2 w-100" />
              </label>
              <label className="w-100">
                <label htmlFor="">CVC</label>
                <CardCvcElement className="form-control my-2 py-2 w-100" />
              </label>
            </>
          )}
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

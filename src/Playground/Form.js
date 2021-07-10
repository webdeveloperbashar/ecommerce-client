import React, { useState } from "react";
import { FormInputFieldData } from "../pages/Checkout/FormInputFieldData";
import Validate from "./../config/Validate";
import Step from "./Step";
const Form = ({ step, setStep }) => {
  const [formData, setFormData] = useState(FormInputFieldData);
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
  const [error, setError] = useState({});

  const stepHandleChange = (values, e) => {
    e.preventDefault();
    const newError = Validate(values);
    setError(newError);
    if (Object.keys(newError).length === 0) {
      setStep(step + 1);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDatas = {};
    formDatas.name = formData.stepOne.name.value;
    formDatas.mobile = formData.stepOne.mobile.value;
    formDatas.company = formData.stepOne.company.value;
    formDatas.stete = formData.stepOne.state.value;
    formDatas.city = formData.stepOne.city.value;
    formDatas.zip = formData.stepOne.zip.value;
    formDatas.country = formData.stepOne.country.value;
    formDatas.address = formData.stepOne.address.value;
    console.log(formDatas);
    setStep(step + 1)
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <Step
          key="stepOne"
          data={formData.stepOne}
          onChange={handleChange}
          onStepChange={stepHandleChange}
          error={error}
          stepKey="stepOne"
          step={1}
        />
      )}
      {step === 2 && (
        <Step
          key="stepTwo"
          data={formData.stepTwo}
          onChange={handleChange}
          onStepChange={stepHandleChange}
          error={error}
          stepKey="stepTwo"
          step={2}
          onPrevStep={(step) => setStep(step)}
        />
      )}
      {
        step === 3 && <div className="confirm__msg">
          <h2 className="text-center">Your order is confirmed !</h2>
          <p className="text-center">Thanks for your order! You will receive a recipeint of your order on your email.</p>
        </div>
      }
      {step === 2 && (
        <button type="submit" className="btn">
          Order Confirm
        </button>
      )}
    </form>
  );
};

export default Form;

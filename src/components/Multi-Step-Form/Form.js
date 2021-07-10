import { useState } from "react";
import Validate from "../../config/Validate";
import Step from "./Step";

const Form = ({ step, setStep }) => {
  const [formData, setFormData] = useState({
    stepOne: {
      name: {
        value: "",
        required: true,
        type: "input",
        label: "Name",
        placeholder: "Enter your name",
      },
      mobile: {
        value: "",
        required: true,
        type: "input",
        label: "Mobile",
        placeholder: "Enter your mobile no",
      },
      company: {
        value: "",
        required: true,
        type: "input",
        label: "Company",
        placeholder: "Enter your company",
      },
      state: {
        value: "",
        required: true,
        type: "input",
        label: "State",
        placeholder: "Enter your state",
      },
      city: {
        value: "",
        required: true,
        type: "input",
        label: "City",
        placeholder: "Enter your city",
      },
      zip: {
        value: "",
        required: true,
        type: "input",
        label: "Zip",
        placeholder: "Enter your zip",
      },
      country: {
        value: "",
        type: "select",
        required: true,
        label: "Country",
        options: [
          { value: "", label: "Choose Country" },
          { value: "bangladesh", label: "Bangladesh" },
          { value: "pakistan", label: "Pakistan" },
        ],
      },
      address: {
        value: "",
        required: true,
        type: "input",
        label: "Address",
        placeholder: "Enter your address",
      },
    },
    stepTwo: {
      email: {
        value: "",
        email: true,
        type: "input",
        placeholder: "Enter email",
      },
      password: {
        value: "",
        minLength: 6,
        type: "input:password",
        placeholder: "Enter password",
      },
    },
    stepThree: {
      country: {
        value: "",
        type: "select",
        required: true,
        options: [
          { value: "", label: "Choose Country" },
          { value: "bangladesh", label: "Bangladesh" },
          { value: "pakistan", label: "Pakistan" },
        ],
      },
    },
  });
  const [error, setError] = useState({});
  const handleChange = (step, e) => {
    e.persist();
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
    const data = new FormData();
    data.append("firstname", formData.stepOne.firstName.value);
    data.append("lastname", formData.stepOne.lastName.value);
    data.append("email", formData.stepTwo.email.value);
    data.append("password", formData.stepTwo.password.value);
    data.append("country", formData.stepThree.country.value);
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
      {step === 3 && (
        <Step
          key="stepThree"
          data={formData.stepThree}
          onChange={handleChange}
          onStepChange={stepHandleChange}
          error={error}
          stepKey="stepThree"
          step={3}
          onPrevStep={(step) => setStep(step)}
        />
      )}
      {step >= 3 && (
        <button type="submit" className="btn">
          {" "}
          Submit
        </button>
      )}
    </form>
  );
};

export default Form;

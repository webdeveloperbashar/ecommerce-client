import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { BsMap } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdPayment } from "react-icons/md";
// import StripeCheckout from "react-stripe-checkout";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import Form from "../../Playground/Form";
// import SelectOption from '../../components/Multi-Step-Form/SelectOption';
// import Form from "../../components/Multi-Step-Form/Form";
// import InputField from "../../config/InputField";
// import { FormInputFieldData, InputRadio } from "./FormInputFieldData";

const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  // form data state
  // const [value, setValue] = useState({
  //   name: "",
  //   phone: "",
  //   company: "",
  //   state: "",
  //   city: "",
  //   zip: "",
  //   country: "",
  //   address: "",
  //   payment: "",
  // });
  // const handleChange = (e) => {
  //   setValue({
  //     ...value,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(value);
  // };
  // // multi form step count
  const [step, setStep] = useState(1);
  // // stripe checkout state
  // const onToken = (token) => {
  //   console.log(token);
  // };
  return (
    <>
      {device.isDesktop && <Nav isShow />}
      <div className="checkout__wrapper mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="checkout__process bg-light py-3 box__shadow">
                <div className={`shipping__info ${step >= 1 && "icon__green"}`}>
                  <div className="checkout__icon">
                    <BsMap />
                  </div>
                  <div className="checkout__content">
                    <p>Billing Info</p>
                  </div>
                </div>
                <div className={`payment ${step >= 2 && "icon__green"}`}>
                  <div className="checkout__icon">
                    <MdPayment />
                  </div>
                  <div className="checkout__content">
                    <p>Payment</p>
                  </div>
                </div>
                <div className={`confirmation ${step >= 3 && "icon__green"}`}>
                  <div className="checkout__icon">
                    <IoMdCheckmarkCircleOutline />
                  </div>
                  <div className="checkout__content">
                    <p>Confirmation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="checkout__form box__shadow bg-light p-3  mt-4">
                <Form step={step} setStep={setStep} />
                {/* <form onSubmit={handleSubmit}>
                  {step === 1 &&
                    FormInputFieldData.map((data, index) => {
                      if (data.type === "text" || data.type === "number") {
                        return (
                          <InputField
                            key={index + 1}
                            divStyle="input__field__inline"
                            label={data.label}
                            type={data.type}
                            name={data.name}
                            value={data.value}
                            className={data.className}
                            placeholder={data.placeholder}
                            onChange={handleChange}
                            span
                          />
                        );
                      }
                      if (data.type === "select") {
                        return (
                          <SelectOption
                            key={index + 1}
                            name={data.name}
                            value={data.value}
                            options={data.options}
                            onChange={handleChange}
                            divStyle="input__field__inline"
                            label={data.label}
                            type={data.type}
                          />
                        );
                      }
                    })}
                  {step === 2 && (
                    <div>
                      <h2 className="font-size__2">
                        Select Payment Method{" "}
                        <span className="text-danger">*</span>
                      </h2>
                      {InputRadio.map((data, index) => (
                        <div className="my-4" key={index + 1}>
                          <input
                            type={data.type}
                            name={data.name}
                            value={data.value}
                            className="me-2"
                            onChange={handleChange}
                          />
                          <label htmlFor={data.label}>{data.label}</label>
                        </div>
                      ))}
                    </div>
                  )}
                  {step === 3 && (
                    <div className="text-center my-5">
                      <h2 className="text-center font-olive-green mb-3 font-size__3">
                        Your order is confirmed!
                      </h2>
                      <p style={{ fontSize: "17px", color: "black" }}>
                        Thanks for your order! You will recieve a recipient of
                        your order on your email
                      </p>
                    </div>
                  )}
                  <div className="form-group">
                    <button
                      type="submit"
                      className={`btn ms-auto ${
                        step >= 2 ? "d-block" : "d-none"
                      }`}
                      style={{ float: "right" }}
                      onClick={() => {
                        setStep(step + 1);
                      }}
                    >
                      Confirm Order
                    </button>
                  </div>
                </form> */}
                {/* <div className="form-group d-inline-block">
                  <button
                    className={`btn ms-auto ${step > 1 ? "d-block" : "d-none"}`}
                    style={{ float: "right" }}
                    onClick={() => {
                      setStep(step - 1);
                    }}
                  >
                    Previous
                  </button>
                </div>
                <div className="form-group d-inline-block">
                  <button
                    className={`btn ms-auto ${
                      step <= 2 ? "d-block" : "d-none"
                    }`}
                    style={{ float: "right" }}
                    onClick={() => {
                      setStep(step + 1);
                    }}
                  >
                    Next
                  </button>
                </div> */}
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

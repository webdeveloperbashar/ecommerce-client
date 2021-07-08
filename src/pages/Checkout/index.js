import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { BsMap } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import InputField from "../../config/InputField";
import { FormInputFieldData } from "./FormInputFieldData";

const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  // form data state
  const [value, setValue] = useState({
    name: "",
    phone: "",
    company: "",
    state: "",
    city: "",
    zip: "",
    country: "",
    address: "",
    // payment: "",
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  // multi form step count
  const [count, setCount] = useState(1);
  return (
    <>
      {device.isDesktop && <Nav isShow />}
      <div className="checkout__wrapper mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="checkout__process bg-light py-3 box__shadow">
                <div
                  className={`shipping__info ${count >= 1 && "icon__green"}`}
                >
                  <div className="checkout__icon">
                    <BsMap />
                  </div>
                  <div className="checkout__content">
                    <p>Billing Info</p>
                  </div>
                </div>
                <div className={`payment ${count >= 2 && "icon__green"}`}>
                  <div className="checkout__icon">
                    <MdPayment />
                  </div>
                  <div className="checkout__content">
                    <p>Payment</p>
                  </div>
                </div>
                <div className={`confirmation ${count >= 3 && "icon__green"}`}>
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
                <form onSubmit={handleSubmit}>
                  {count === 1 &&
                    FormInputFieldData.map((data, index) => (
                      <InputField
                        key={index + 1}
                        divStyle="input__field__inline"
                        label={data.label}
                        type={data.type}
                        name={data.name}
                        className={data.className}
                        placeholder={data.placeholder}
                        onChange={handleChange}
                        span
                      />
                    ))}
                  {count === 2 && (
                    <div>
                      <h2 className="font-size__2">
                        Select Payment Method{" "}
                        <span className="text-danger">*</span>
                      </h2>
                    </div>
                  )}
                  {count === 3 && (
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
                        count >= 2 ? "d-block" : "d-none"
                      }`}
                      style={{ float: "right" }}
                      onClick={() => setCount(count + 1)}
                    >
                      Confirm Order
                    </button>
                  </div>
                </form>
                <div className="text-end">
                  <button
                    className={`btn me-5 ${count <= 1 && "d-none"}`}
                    onClick={() => setCount(count - 1)}
                  >
                    Previous
                  </button>
                  <button
                    className={`btn ${count >= 2 && "d-none"}`}
                    onClick={() => setCount(count + 1)}
                    disabled={count === 3}
                  >
                    Continue to payment
                  </button>
                </div>
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

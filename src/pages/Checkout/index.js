import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { BsMap } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import Form from "../../components/Multi-Step-Form/Form";
import OrderSummary from "../../components/OrderSummary";
import HorizontalLine from "./../../config/HorizontalLine";
const stripeKey = loadStripe(
  "pk_test_51IhCBpK6mTL6jbOTDEhGYqKmVcOd7RlmlbO4wHTPAT6x8Uavm3mFHYzzd7kTjSZw52S5nZjdo1K1OG6ZFFhdyOVQ00aNkSLuN9"
);
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  // // multi form step count
  const [step, setStep] = useState(1);
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
                    <p>Shipping Info</p>
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
                    <p>Finished</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="checkout__form box__shadow bg-light p-3  mt-4">
                <Elements stripe={stripeKey}>
                  <Form step={step} setStep={setStep} />
                </Elements>
              </div>
            </div>
            <div className="col-md-4">
              <div className="order__summary box__shadow bg-light p__2 mt-4 mb-4">
                <h2 className="text-dark font-size__2 py-1">Order Summary</h2>
                <HorizontalLine
                  width="100%"
                  height="1px"
                  margin="8px auto"
                  background="#8080803b"
                />
                <div className="d-flex align-items-center justify-content-between">
                  <span>Kashmiri Fruits X 2</span>
                  <span>$157</span>
                </div>
                <HorizontalLine
                  width="100%"
                  height="1px"
                  margin="8px auto"
                  background="#8080803b"
                />
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

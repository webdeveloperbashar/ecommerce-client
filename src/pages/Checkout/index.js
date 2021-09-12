import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import Form from "../../components/Multi-Step-Form/Form";
import OrderSummary from "../../components/OrderSummary";
import HorizontalLine from "./../../config/HorizontalLine";
import { Stepper, Step, StepLabel } from "@material-ui/core";
const Index = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // device breakpoints
  const device = useBreakpoints();
  // // multi form step count
  const [step, setStep] = useState(0);
  return (
    <>
      <Helmet>
        <title>Checkout - GreenValleyGrocery Shop</title>
      </Helmet>
      {device.isDesktop && <Nav isShow />}
      <div className="checkout__wrapper mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="checkout__process bg-light py-3 box__shadow">
                <div className={`shipping__info ${step >= 1 && "icon__green"}`}>
                  <Stepper alternativeLabel activeStep={step}>
                    {["Shipping Address", "Payment", "Place order"].map(
                      (step) => (
                        <Step key={step}>
                          <StepLabel>{step}</StepLabel>
                        </Step>
                      )
                    )}
                  </Stepper>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="checkout__form box__shadow bg-light p-3  mt-4">
                <Form step={step} setStep={setStep} cartItems={cartItems} />
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
                {cartItems.map((item) => (
                  <div
                    style={{
                      borderBottom: "1px solid #8080803b",
                      paddingBottom: "8px",
                      marginBottom: "8px",
                    }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>
                      {item.name} X {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

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

import { useParams } from "@reach/router";
import React from "react";
import { useBreakpoints } from "react-device-breakpoints";
import Footer from "../../components/Footer";
import TopHeader from "../../components/Header/TopHeader";
import Login from "../../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { emailVerify, resendLink } from "../../Store/Actions/UserAction";
import { useEffect } from "react";
import getDataFromLocalhost from "../../config/GetLocalhostData";
const Index = () => {
  // get data from react-reduxt store
  const message = useSelector((state) => state.userEmailVerify.verify);
  // use params
  const { token } = useParams();
  // device breakpoints
  const device = useBreakpoints();
  // send data to react-redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emailVerify(token));
  }, [token, dispatch]);
  // resend code to user email
  const email = getDataFromLocalhost('verify_email')
  const handleResendLink = () => {
    dispatch(resendLink(email));
    console.log("clicked");
  };
  return (
    <>
      {device.isDesktop && <TopHeader />}
      <div className="email_verify_wrapper my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login_form my-4">
                <div style={{ width: "48%", margin: "auto" }}>
                  {message?.wrong && (
                    <div className="text-center my-5">
                      <p className="alert alert-danger">{message?.wrong}</p>
                      <button
                        onClick={() => handleResendLink()}
                        style={{
                          border: "none",
                          padding: "8px 15px",
                          color: "white",
                          background: "#76C227",
                        }}
                      >
                        Resend Code
                      </button>
                    </div>
                  )}
                  {message?.success && (
                    <p className="alert alert-success">{message?.success}</p>
                  )}
                </div>
                {message?.success && (
                  <Login width="48%" heading="Log In" isShow />
                )}
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

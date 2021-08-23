import { useParams } from "react-router-dom";
import React from "react";
import { useBreakpoints } from "react-device-breakpoints";
import Footer from "../../components/Footer";
import TopHeader from "../../components/Header/TopHeader";
import Login from "../../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { emailVerify } from "../../Store/Actions/UserAction";
import { useEffect } from "react";
const Index = () => {
  // get data from react-reduxt store
  const message = useSelector(state=>state.userEmailVerify.verify)
  // use params
  const { token } = useParams();
  // const verifyToken = {token: token}
  // device breakpoints
  const device = useBreakpoints();
  // send data to react-redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emailVerify(token));
  }, [token, dispatch]);
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
                    <p className="alert alert-danger">{message?.wrong}</p>
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

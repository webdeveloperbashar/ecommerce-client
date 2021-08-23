import React from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Link, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import TopHeader from "../../components/Header/TopHeader";

const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  //
  const path = useLocation().pathname.slice(1);
  return (
    <>
      {device.isDesktop && <TopHeader />}
      <div className="error_page_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="error_signal">
                <img
                  src="https://res.cloudinary.com/green-valley-grocery/image/upload/v1629699529/green_valley_users/error_gozvpx.png"
                  className="img-fluid"
                  alt="error_image"
                />
                <div className="error_content">
                  <h3 style={{ fontSize: "25px", color: 'red', fontWeight: '700' }}>
                    "{path}" This page is not found{" "}
                  </h3>
                  <div className="return_button mt-4">
                      <Link to="/">Go Home</Link>
                  </div>
                </div>
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

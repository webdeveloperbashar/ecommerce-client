import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const SubscribeSection = () => {
  return (
    <main className="m-top__4">
      <div className="container">
        <div
          className="subscrib__banner p__4 bg-light"
          style={{
            background: `url(https://i.ibb.co/LzDWNGr/subscibe-banner.jpg)`,
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="subscribe__content text-center">
                <h2 className="m-bottom__2">Subscribe Us</h2>
                <p>For Every Hot Product Notifications</p>
                <form>
                  <div className="d-flex">
                    <input
                      type="text"
                      placeholder="Subscribe By Email"
                      className="form-control"
                    />
                    <button type="submit" className="btn">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SubscribeSection;

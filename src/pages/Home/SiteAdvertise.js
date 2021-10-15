import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "@reach/router";

const SiteAdvertise = () => {
  return (
    <main>
      <div className="container">
        <div className="row advertise__element m-top__4">
          <div className="col-md-4 policy-col-1">
            <AdvertiseContent
              content="Discover Real Organic Flavors"
              link="Shop Now"
              image="https://res.cloudinary.com/green-valley-grocery/image/upload/v1633632218/banner-images/h1-banner-1_dif51q.jpg"
              textColor="#0A472E"
            />
          </div>
          <div className="col-md-4 policy-col-2">
            <AdvertiseContent
              content="Best Honey with Premium Quality"
              link="Shop Now"
              image="https://res.cloudinary.com/green-valley-grocery/image/upload/v1633632218/banner-images/h1-banner-2_shgq9n.jpg"
              textColor="white"
            />
          </div>
          <div className="col-md-4 policy-col-3">
            <AdvertiseContent
              content="Detox with Green Vegetables and Fruits"
              link="Shop Now"
              image="https://res.cloudinary.com/green-valley-grocery/image/upload/v1633632219/banner-images/h1-banner-3_hilkiw.jpg"
              textColor="white"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

const AdvertiseContent = ({ content, link, image, textColor }) => {
  return (
    <>
      <div className="advertise__wrapper">
        <div className="advertise__inner">
          <div className="advertise__image">
            <div
              className="image"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
          <div className="advertise__content">
            <div className="content">
              <h2 style={{ color: textColor }}>{content}</h2>
              <Link to="/shop">{link}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteAdvertise;

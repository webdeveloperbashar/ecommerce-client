import React, { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import ReactImageMagnify from "react-image-magnify";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Footer from "../../components/Footer";
import Nav from "./../../components/Header/Nav";
import DeliveryTips from "./Delivery-Tips";
import RelatedProduct from "./Related-Product";
import Description from "./Review-content/Description";
import Review from "./Review-content/Review";
import Tags from "./Review-content/Tags";
import SocialMediaShareIcon from "./Social-media-share-icon";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  // base url generate
  const location = useLocation();
  const shareUrl = location.href;
  // qunatity count
  const [quantity, setQuantity] = useState(1);
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      {device.isDesktop && <Nav isShow />}
      <div className="product__details__wrapper mt-5">
        <div className="container">
          <div className="row">
            {/* product image */}
            <div className="col-md-9">
              <div className="product__wrapper__details box__shadow bg-light">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product__details__image">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "product details",
                            isFluidWidth: true,
                            src: "https://i.ibb.co/WyGPRLZ/orange.jpg",
                          },
                          largeImage: {
                            src: "https://i.ibb.co/WyGPRLZ/orange.jpg",
                            width: 1200,
                            height: 1800,
                            background: "white",
                          },
                        }}
                      />
                    </div>
                  </div>
                  {/* product details */}
                  <div className="col-md-6">
                    <div className="product__details py-3 px-1 ">
                      <h2>Kashmiri fruits</h2>
                      <div className="remaining">
                        <span>In Stock</span>
                      </div>
                      <div className="rating">
                        <span className="d-flex align-items-center">
                          <ReactStars
                            count={5}
                            size={24}
                            value={5}
                            isHalf={true}
                            a11y={false}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          &nbsp; (5) Reviews
                        </span>
                      </div>
                      <div className="product__price">
                        <del>$254</del> <strong>$215</strong>
                      </div>
                      <div className="sku">
                        <span>SKU:</span>&nbsp;Z587TXS
                      </div>
                      <div className="product__category">
                        <span>Category:</span>&nbsp;Vegetable & Fruits
                      </div>
                      <div className="quantity">
                        <strong className="ms-1">Quantity:</strong>&nbsp;
                        <button onClick={handleMinus}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handlePlus}>+</button>
                      </div>
                      <div className="actions__btn">
                        <button>order now</button>
                        <button className="mx-2">add to cart</button>
                        <button>add wishlist</button>
                      </div>
                      <div className="share__on">
                        {SocialMediaShareIcon.map((data, key) => (
                          <data.button
                            key={key + 1}
                            url={`${shareUrl}`}
                            className="share__icon"
                          >
                            <data.icon size={40} round={1} />
                          </data.button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* delivery tips */}
            <div className="col-md-3">
              <DeliveryTips />
            </div>
          </div>
          {/* product review, description and tags */}
          <div className="row">
            <div className="col-md-12">
              <div className="review__section box__shadow bg-light p-3 mt-4">
                <Tabs>
                  <TabList>
                    <Tab>Description</Tab>
                    <Tab>Review (1)</Tab>
                    <Tab>Tags</Tab>
                  </TabList>

                  <TabPanel>
                    <Description />
                  </TabPanel>
                  <TabPanel>
                    <Review />
                  </TabPanel>
                  <TabPanel>
                    <Tags />
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <RelatedProduct />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

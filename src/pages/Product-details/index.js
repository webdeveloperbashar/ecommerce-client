import React, { useEffect, useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useParams } from "@reach/router";
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
import { useDispatch } from "react-redux";
import {
  AddToCartAction,
  DecreamentQuantityAction,
  IncreaseQuantityAction,
} from "../../Store/Actions/CartAction";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { ProductReveiwGetAction } from "../../Store/Actions/ProductReviewAction";
const Index = () => {
  const { id } = useParams();
  // device breakpoints
  const device = useBreakpoints();
  // base url generate
  const location = useLocation();
  const shareUrl = location.href;
  // individual product find from redux store
  const product = useSelector((state) =>
    state.products.find((pd) => pd._id === id)
  );
  let productTags = [];
  const splitTag = product?.tags.split(",");
  for (let i = 0; i < splitTag?.length; i++) {
    productTags.push(splitTag[i]);
  }
  // get specific product review
  const { getReview } = useSelector((state) => state.getReview);
  const review = useSelector((state) => state.review.review);
  // product find for add to cart from cartItems
  const cartItems = useSelector((state) => state.cart.cartItems.slice()).find(
    (pd) => pd._id === id
  );
  // hooks
  const dispatch = useDispatch();
  // get product review
  useEffect(() => {
    dispatch(ProductReveiwGetAction(id));
  }, [dispatch, id, review]);
  // qunatity count
  const [quantity, setQuantity] = useState(1);
  // quantity update
  const handleQuantity = (type) => {
    if (type === "increament") {
      dispatch(IncreaseQuantityAction(cartItems || product));
      setQuantity(quantity + 1);
    }
    if (type === "decreament") {
      dispatch(DecreamentQuantityAction(cartItems || product));
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };
  // add to cart handler
  const handleAddToCart = () => {
    dispatch(AddToCartAction(product, quantity));
  };
  // direct product order handler
  const handleOrderProduct = () => {
    dispatch(AddToCartAction(product, cartItems ? 0 : quantity));
  };
  return (
    <>
      <Helmet>
        <title>{`${product?.name} - GreenValleyGrocery Shop`}</title>
      </Helmet>
      {device.isDesktop && <Nav isShow />}
      <div className="product__details__wrapper mt-5">
        <div className="container">
          <div className="row">
            {/* product image */}
            <div className="col-md-9">
              <div className="product__wrapper__details box__shadow bg-light">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product__details__image position-relative">
                      <br />
                      <br />
                      <Carousel
                        axis="horizontal"
                        showThumbs={true}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        autoPlay={true}
                      >
                        {product?.productImage?.map((item) => (
                          <div>
                            <img src={item.url} alt="slider" />
                          </div>
                        ))}
                      </Carousel>
                      <div className="discount__percent">
                        -{product?.discount}%
                      </div>
                    </div>
                  </div>
                  {/* product details */}
                  <div className="col-md-6">
                    <div className="product__details py-3 px-1 ">
                      <h2>{product?.name}</h2>
                      <div className="remaining">
                        <span>
                          {product?.stock ? "In Stock" : "Out Of Stock"}
                        </span>
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
                        <strong>${product?.price}</strong>
                      </div>
                      <div className="product__category">
                        <span>Weight:</span>
                        <strong>
                          &nbsp;{product?.weight}&nbsp;{product?.unit}
                        </strong>
                      </div>
                      <div className="sku">
                        <span>SKU:</span>&nbsp;Z587TXS
                      </div>
                      <div className="product__category">
                        <span>Category:</span>&nbsp;{product?.category}
                      </div>
                      <div className="quantity qnty">
                        <strong className="ms-1">Quantity:</strong>&nbsp;
                        <button onClick={() => handleQuantity("decreament")}>
                          -
                        </button>
                        <span>
                          {cartItems?.quantity ? cartItems?.quantity : quantity}
                        </span>
                        <button onClick={() => handleQuantity("increament")}>
                          +
                        </button>
                      </div>
                      <div className="actions__btn">
                        <Link to="/checkout" className="text-white">
                          <button onClick={handleOrderProduct}>
                            order now
                          </button>
                        </Link>
                        <button
                          className="mx-2"
                          onClick={handleAddToCart}
                          disabled={cartItems?.quantity ? true : false}
                        >
                          {cartItems ? "Added Product" : "Add To Cart"}
                        </button>
                      </div>
                      <div className="share__on">
                        <div>
                          <h2>Share On:</h2>
                        </div>
                        <div>
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
                    <Tab>Review ({getReview?.length})</Tab>
                    <Tab>Tags</Tab>
                  </TabList>
                  <TabPanel>
                    <Description text={product?.description} />
                  </TabPanel>
                  <TabPanel>
                    <Review getReview={getReview} id={id} />
                  </TabPanel>
                  <TabPanel>
                    <Tags productTags={productTags} />
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <RelatedProduct category={product?.category} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

import React from "react";
import banner4 from '../../assets/product-banner/banner-4.jpg';
import FakeData from "../../config/FakeData2";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
const TopRatedProduct = () => {
  return (
    <>
      <ProductSectionWrapper
        bannerTitle="Top Rated Products"
        bannerImg={banner4}
        bannerOfferTitle="Monthly Sale Offer!"
        bannerOfferRate="79% Of"
        whichProduct="All Health & Beverage"
        btnText="Shop Now"
        data={FakeData}
        sliderArrows={true}
        sliderSpeed={1500}
        sliderTransition="all .1s"
      />
    </>
  );
};

export default TopRatedProduct;

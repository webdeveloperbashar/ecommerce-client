import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import banner4 from '../../assets/product-banner/banner-4.jpg';
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
import { getRatingAscSorting } from "../../Store/Actions/ProductAction";
const TopRatedProduct = () => {
  const products = useSelector((state) => state.getRatingAscSorting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRatingAscSorting("rating", "asc", 10));
  }, [dispatch]);
  return (
    <>
      <ProductSectionWrapper
        bannerTitle="Top Rated Products"
        bannerImg={banner4}
        bannerOfferTitle="Monthly Sale Offer!"
        bannerOfferRate="79% Of"
        whichProduct="All Health & Beverage"
        btnText="Shop Now"
        data={products}
        sliderArrows={true}
        sliderSpeed={1500}
        sliderTransition="all .1s"
      />
    </>
  );
};

export default TopRatedProduct;

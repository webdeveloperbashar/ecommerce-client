import React, { useEffect } from "react";
import banner1 from "../../assets/product-banner/banner-1.jpg";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getCreatedSorting } from "../../Store/Actions/ProductAction";
const HotProduct = () => {
  const products = useSelector((state) => state.getCreatedSorting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCreatedSorting("createdAt", "desc", 10));
  }, [dispatch]);
  return (
    <ProductSectionWrapper
      bannerTitle="Hot Products"
      bannerImg={banner1}
      bannerOfferTitle="Hot Offer!"
      bannerOfferRate="60% Of"
      whichProduct="All Dairy Products"
      btnText="Shop Now"
      data={products}
      sliderArrows={true}
      sliderSpeed={1500}
      sliderTransition="all 2s"
    />
  );
};
export default HotProduct;

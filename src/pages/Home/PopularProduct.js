import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import banner3 from "../../assets/product-banner/banner-3.jpg";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
import { getRatingDescSorting } from "../../Store/Actions/ProductAction";
const PopularProduct = () => {
  const products = useSelector((state) => state.getRatingDescSorting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRatingDescSorting("rating", "desc", 10));
  }, [dispatch]);
  return (
    <>
      <ProductSectionWrapper
        bannerTitle="Popular Products"
        bannerImg={banner3}
        bannerOfferTitle="Daily Sale Offer!"
        bannerOfferRate="49% Of"
        whichProduct="All Vegetable & Fruits"
        btnText="Shop Now"
        data={products}
        sliderArrows={true}
        sliderSpeed={1500}
        sliderTransition="all 1s"
      />
    </>
  );
};

export default PopularProduct;

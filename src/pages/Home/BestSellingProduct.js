import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import banner2 from "../../assets/product-banner/banner-2.jpg";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
import { getSoldSorting } from "../../Store/Actions/ProductAction";
const BestSellingProduct = () => {
  const products = useSelector((state) => state.getSoldSorting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSoldSorting("sold", "desc", 10));
  }, [dispatch]);
  return (
    <ProductSectionWrapper
      bannerTitle="Best Selling Products"
      bannerImg={banner2}
      bannerOfferTitle="Weekly Sale Offer!"
      bannerOfferRate="30% Of"
      whichProduct="All Category Products"
      btnText="Shop Now"
      data={products}
      sliderArrows={true}
      sliderSpeed={1500}
      sliderTransition="all .5s"
    />
  );
};

export default BestSellingProduct;

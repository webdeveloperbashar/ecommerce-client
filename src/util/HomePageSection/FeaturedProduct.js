import banner1 from "../../assets/product-banner/banner-1.jpg";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
const FeaturedProduct = () => {
  return (
    <ProductSectionWrapper
      bannerTitle="Hot Products"
      bannerImg={banner1}
      bannerOfferTitle="Hot Offer!"
      bannerOfferRate='60% Of'
      whichProduct='All Dairy Products'
      btnText='Shop Now'
    />
  );
};

export default FeaturedProduct;

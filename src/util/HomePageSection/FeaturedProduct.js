import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../../assets/product-banner/banner-1.jpg";
import HomeProductSection from "../../config/HomeProductSection";
const FeaturedProduct = () => {
  return (
    <HomeProductSection
      bannerTitle="Feature Products"
      bannerImg={banner1}
      bannerOfferTitle="Hot Offer!"
      bannerOfferRate='60% Of'
      whichProduct='All Dairy Products'
      btnText='Show Now'
    />
  );
};

export default FeaturedProduct;

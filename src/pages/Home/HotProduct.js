import banner1 from "../../assets/product-banner/banner-1.jpg";
import FakeData from "../../config/FakeData";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
const HotProduct = () => {
  return (
    <ProductSectionWrapper
      bannerTitle="Hot Products"
      bannerImg={banner1}
      bannerOfferTitle="Hot Offer!"
      bannerOfferRate='60% Of'
      whichProduct='All Dairy Products'
      btnText='Shop Now'
      data={FakeData}
      sliderArrows={true}
      sliderSpeed={1500}
      sliderTransition="all 2s"
    />
  );
};

export default HotProduct;

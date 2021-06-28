import banner1 from "../../assets/product-banner/banner-1.jpg";
import FakeData2 from "../../config/FakeData2";
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
      data={FakeData2}
    />
  );
};

export default HotProduct;

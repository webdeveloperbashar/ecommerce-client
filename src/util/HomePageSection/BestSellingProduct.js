import banner2 from "../../assets/product-banner/banner-2.jpg";
import FakeData from "../../config/FakeData";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
const BestSellingProduct = () => {
  return (
    <ProductSectionWrapper
      bannerTitle="Best Selling Products"
      bannerImg={banner2}
      bannerOfferTitle="Weekly Sale Offer!"
      bannerOfferRate="30% Of"
      whichProduct="All Category Products"
      btnText="Shop Now"
      data={FakeData}
    />
  );
};

export default BestSellingProduct;

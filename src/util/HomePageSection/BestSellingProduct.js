import banner2 from "../../assets/product-banner/banner-2.jpg";
import FakeData from "../../config/FakeData";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
const BestSellingProduct = () => {
  return (
    <ProductSectionWrapper
      bannerTitle="Best Selling Products"
      bannerImg={banner2}
      bannerOfferTitle="Hot Offer!"
      bannerOfferRate="60% Of"
      whichProduct="All Dairy Products"
      btnText="Shop Now"
      data={FakeData}
    />
  );
};

export default BestSellingProduct;

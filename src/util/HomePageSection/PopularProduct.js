import banner3 from "../../assets/product-banner/banner-3.jpg";
import FakeData from "../../config/FakeData";
import ProductSectionWrapper from "../../config/ProductSectionWrapper";
const PopularProduct = () => {
  return (
    <div>
      <ProductSectionWrapper
        bannerTitle="Popular Products"
        bannerImg={banner3}
        bannerOfferTitle="Daily Sale Offer!"
        bannerOfferRate="49% Of"
        whichProduct="All Vegetable & Fruits"
        btnText="Shop Now"
        data={FakeData}
      />
    </div>
  );
};

export default PopularProduct;

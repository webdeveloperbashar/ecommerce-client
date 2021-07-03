import { useBreakpoints } from "react-device-breakpoints";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import BestSellingProduct from "../../util/HomePageSection/BestSellingProduct";
import HeroSection from "../../util/HomePageSection/HeroSection";
import HotProduct from "../../util/HomePageSection/HotProduct";
import PartnerSection from "../../util/HomePageSection/PartnerSection";
import PopularProduct from "../../util/HomePageSection/PopularProduct";
import SiteFeatures from "../../util/HomePageSection/SiteFeatures";
import Policy from "../../util/HomePageSection/SitePolicy";
import SubscribeSection from "../../util/HomePageSection/SubscribeSection";
import TopRatedProduct from "../../util/HomePageSection/TopRatedProduct";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  return (
    <>
      {device.isDesktop && <Nav />}
      <HeroSection />
      <Policy />
      <HotProduct />
      <BestSellingProduct />
      <SiteFeatures />
      <PopularProduct />
      <TopRatedProduct />
      <SubscribeSection />
      <PartnerSection />
      <Footer />
    </>
  );
};

export default Index;

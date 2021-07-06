import { useBreakpoints } from "react-device-breakpoints";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import BestSellingProduct from "./BestSellingProduct";
import HeroSection from "./HeroSection";
import HotProduct from "./HotProduct";
import PartnerSection from "./PartnerSection";
import PopularProduct from "./PopularProduct";
import SiteFeatures from "./SiteFeatures";
import Policy from "./SitePolicy";
import SubscribeSection from "./SubscribeSection";
import TopRatedProduct from "./TopRatedProduct";
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

import { useBreakpoints } from "react-device-breakpoints";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import HeroSection from "./HeroSection";
import HotProduct from "./HotProduct";
import PopularProduct from "./PopularProduct";
import SiteFeatures from "./SiteFeatures";
import Advertise from "./SiteAdvertise";
import SubscribeSection from "./SubscribeSection";
import TopRatedProduct from "./TopRatedProduct";
import CategoriesSection from "./CategoriesSection";
import BestSellingProduct from "./BestSellingProduct";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  return (
    <>
      {device.isDesktop && <Nav />}
      <HeroSection />
      <Advertise />
      <HotProduct />
      <BestSellingProduct />
      <SiteFeatures />
      <TopRatedProduct />
      <PopularProduct />
      <CategoriesSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Index;

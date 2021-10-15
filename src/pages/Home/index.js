import { useBreakpoints } from "react-device-breakpoints";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import BestSellingProduct from "./BestSellingProduct";
import HeroSection from "./HeroSection";
import HotProduct from "./HotProduct";
import PopularProduct from "./PopularProduct";
import SiteFeatures from "./SiteFeatures";
import Advertise from "./SiteAdvertise";
import SubscribeSection from "./SubscribeSection";
import TopRatedProduct from "./TopRatedProduct";
import CategoriesSection from "./CategoriesSection";
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
      <PopularProduct />
      <TopRatedProduct />
      <CategoriesSection />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default Index;

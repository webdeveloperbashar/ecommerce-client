import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import MobileNavbar from "../components/MobileNavbar";
import Nav from "../components/Nav";
import StickyHeader from "../components/StickyHeader";
import Routes from "./Routes";

const App = () => {
  const device = useBreakpoints();
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <StickyHeader />
      {device.isMobile && <MobileNavbar />}
      {device.isDesktop && <Nav />}
      <Routes />
    </>
  );
};

export default App;

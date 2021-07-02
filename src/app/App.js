import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import MobileNavbar from "../components/MobileNavbar";
import MobileStickyFooterMenu from "../components/MobileStickyFooterMenu";
import Nav from "../components/Nav";
import StickyHeader from "../components/StickyHeader";
import Routes from "./Routes";

const App = () => {
  // drawer open and close
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenCartDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenCartDrawer(false);
  };
  // device breakpoints
  const device = useBreakpoints();
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <StickyHeader
        openCartDrawer={openCartDrawer}
        handleOpenDrawer={handleOpenDrawer}
        handleCloseDrawer={handleCloseDrawer}
      />
      {device.isMobile && <MobileNavbar />}
      {device.isDesktop && (
        <Nav
          openCartDrawer={openCartDrawer}
          handleOpenDrawer={handleOpenDrawer}
          handleCloseDrawer={handleCloseDrawer}
        />
      )}
      <Routes />
      {device.isMobile && (
        <MobileStickyFooterMenu handleOpenDrawer={handleOpenDrawer} />
      )}
    </>
  );
};

export default App;

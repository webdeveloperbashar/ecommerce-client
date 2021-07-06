import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import MobileNavbar from "../components/Header/MobileNavbar";
import MobileStickyFooterMenu from "../components/Header/MobileStickyFooterMenu";
import StickyHeader from "../components/Header/StickyHeader";
import Routes from "./Routes";
const App = () => {
  // drawer open and close functionalites
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
      {device.isMobile && (
        <MobileNavbar
          openCartDrawer={openCartDrawer}
          handleOpenDrawer={handleOpenDrawer}
          handleCloseDrawer={handleCloseDrawer}
        />
      )}
      <Routes />
      {device.isMobile && <MobileStickyFooterMenu />}
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import MobileNavbar from "../components/Header/MobileNavbar";
import MobileStickyFooterMenu from "../components/Header/MobileStickyFooterMenu";
import StickyHeader from "../components/Header/StickyHeader";
import { CategoryAction } from "../Store/Actions/CategoryAction";
import { getAllProduct } from "../Store/Actions/ProductAction";
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
  // get request api call
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CategoryAction());
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <title>GreenValleyGrocery - Bangladeshi Top Grocery Shop</title>
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
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;

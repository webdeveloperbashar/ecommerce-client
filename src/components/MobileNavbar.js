import { navigate } from "@reach/router";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/images/brand-logo/valley.svg";
import CartDrawer from '../components/CartDrawer';
const MobileNavbar = ({ openCartDrawer, handleCloseDrawer,handleOpenDrawer }) => {
  return (
    <>
      <CartDrawer
        openCartDrawer={openCartDrawer}
        handleCloseDrawer={handleCloseDrawer}
      />
      <header className="mobile__navbar py-1 bg-light">
        <div className="container">
          <div className="mobile__content">
            {/* mobile icon */}
            <div className="mobile__icon">
              <IoMdMenu onClick={()=>handleOpenDrawer()} />
            </div>
            {/* mobile logo */}
            <div className="mobile__logo">
              <img
                src={logo}
                className="logo"
                onClick={() => navigate("/")}
                alt="logo"
              />
            </div>
            {/* mobile search icon */}
            <div className="mobile__search__icon">
              <span>$99.99</span> <FaSearch />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileNavbar;

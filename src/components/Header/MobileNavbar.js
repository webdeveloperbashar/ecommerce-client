import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand-logo/valley.svg";
import CartDrawer from "./CartDrawer";
import StickySearchForm from "./StickySearchForm";
const MobileNavbar = ({
  openCartDrawer,
  handleCloseDrawer,
  handleOpenDrawer,
}) => {
  // sticky search form show and hide
  const [searchFromShow, setSearchFromShow] = useState(false);
  const handleIconClick = () => {
    setSearchFromShow(!searchFromShow);
  };
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
              <IoMdMenu className="icon" onClick={() => handleOpenDrawer()} />
            </div>
            {/* mobile logo */}
            <div className="mobile__logo">
              <Link to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </div>
            {/* mobile search icon */}
            <div className="mobile__search__icon">
              <ul>
                <li>
                  <span>$99.99</span>
                </li>
                <li>
                  <FaSearch
                    className="icon"
                    onClick={() => handleIconClick(!searchFromShow)}
                  />
                </li>
              </ul>
            </div>
            <StickySearchForm searchFromShow={searchFromShow} />
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileNavbar;

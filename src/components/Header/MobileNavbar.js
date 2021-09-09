import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand-logo/valley.svg";
import { GetCartPrice } from "../../config/GetCartVariant";
import CartDrawer from "./CartDrawer";
import StickySearchForm from "./StickySearchForm";
const MobileNavbar = ({
  openCartDrawer,
  handleCloseDrawer,
  handleOpenDrawer,
}) => {
  // get data react-redux
  const product = useSelector((state) => state.cart.cartItems);
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
              <Link exact to="/">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </div>
            {/* mobile search icon */}
            <div className="mobile__search__icon">
              <ul>
                <li>
                  <span>
                    $
                    {GetCartPrice(product) > 3
                      ? GetCartPrice(product)
                      : "00.00"}
                  </span>
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

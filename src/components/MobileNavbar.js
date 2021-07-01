import { navigate } from '@reach/router';
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/images/brand-logo/valley.svg";
const MobileNavbar = () => {
  return (
    <header
      className="mobile__navbar py-1 bg-light"
    >
      <div className="container">
        <div className="mobile__content">
          {/* mobile icon */}
          <div className="mobile__icon">
            <IoMdMenu />
          </div>
          {/* mobile logo */}
          <div className="mobile__logo">
            <img src={logo} className="logo" onClick={()=> navigate("/")} alt="logo" />
          </div>
          {/* mobile search icon */}
          <div className="mobile__search__icon">
            <span>$99.99</span> <FaSearch /> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileNavbar;

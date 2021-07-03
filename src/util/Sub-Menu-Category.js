import { FiArrowRight } from "react-icons/fi";
import NavLink from "./NavLink";
const SubMenuCategory = () => {
  return (
    <>
      <div className="sub__category">
        <ul>
          <li className="py__2 horizontal__line">
            <NavLink
              to="/vegetable"
              className="p__2 justify-content-between d-flex align-items-center d-block font-blue-gray "
            >
              Vegetable <FiArrowRight />
            </NavLink>
          </li>
          <li className="py__2 horizontal__line">
            <NavLink
              to="/packagefood"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Package Food <FiArrowRight />
            </NavLink>
          </li>
          <li className="py__2 horizontal__line">
            <NavLink
              to="/grocery"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Grocery & Staples <FiArrowRight />
            </NavLink>
          </li>
          <li className="py__2 horizontal__line">
            <NavLink
              to="/dairyproduct"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Dairy Products <FiArrowRight />
            </NavLink>
          </li>
          <li className="py__2 horizontal__line">
            <NavLink
              to="/beverage"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Beverages <FiArrowRight />
            </NavLink>
          </li>
          <li className="py__2 horizontal__line">
            <NavLink
              to="/health"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Health & Wellness <FiArrowRight />
            </NavLink>
          </li>
          <li className="py__2 horizontal__line">
            <NavLink
              to="/dairybread"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Dairy Bread & Egg <FiArrowRight />
            </NavLink>
          </li>
          <li className="py__2">
            <NavLink
              to="/dairybread"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Fruits & Vegetable <FiArrowRight />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SubMenuCategory;

import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const SubMenuCategory = () => {
  return (
    <>
      <div className="sub__category">
        <ul>
          <li className="py__2 horizontal__line">
            <Link
              to="/vegetable"
              className="p__2 justify-content-between d-flex align-items-center d-block font-blue-gray "
            >
              <span className="text">Vegetable</span> <FiArrowRight className="arrow__icon" />
            </Link>
          </li>
          <li className="py__2 horizontal__line">
            <Link
              to="/packagefood"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Package Food <FiArrowRight />
            </Link>
          </li>
          <li className="py__2 horizontal__line">
            <Link
              to="/grocery"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Grocery & Staples <FiArrowRight />
            </Link>
          </li>
          <li className="py__2 horizontal__line">
            <Link
              to="/dairyproduct"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Dairy Products <FiArrowRight />
            </Link>
          </li>
          <li className="py__2 horizontal__line">
            <Link
              to="/beverage"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Beverages <FiArrowRight />
            </Link>
          </li>
          <li className="py__2 horizontal__line">
            <Link
              to="/health"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Health & Wellness <FiArrowRight />
            </Link>
          </li>
          <li className="py__2 horizontal__line">
            <Link
              to="/dairybread"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Dairy Bread & Egg <FiArrowRight />
            </Link>
          </li>
          <li className="py__2">
            <Link
              to="/dairybread"
              className="p__2 d-block font-blue-gray justify-content-between d-flex align-items-center"
            >
              Fruits & Vegetable <FiArrowRight />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default SubMenuCategory;

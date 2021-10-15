import { FiArrowRight } from "react-icons/fi";
import { Link } from "@reach/router";
import { useSelector } from "react-redux";
const SubMenuCategory = () => {
  const categories = useSelector((state) => state.category);
  return (
    <>
      <div className="sub__category">
        <ul>
          {categories.map((item) => (
            <li className="py__2 horizontal__line">
              <Link
                to={`/searchByCategory/${item.category}`}
                className="p__2 justify-content-between d-flex align-items-center d-block font-blue-gray "
              >
                <span className="text">{item.category}</span>{" "}
                <FiArrowRight className="arrow__icon" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SubMenuCategory;

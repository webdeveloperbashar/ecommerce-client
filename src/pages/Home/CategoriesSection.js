import { Link } from "@reach/router";
import { useSelector } from "react-redux";
import { VscTriangleRight } from "react-icons/vsc";

const CategoriesSection = () => {
  const categories = useSelector((state) => state.category.slice(0, 6));
  return (
    <section className="m-top__4">
      <div className="container">
        <div className="featured__product p__4 bg-light">
          <div className="d-flex align-items-center justify-content-between py__2">
            <h1 className="section__title font-size__3 font-dark">
              Categories
            </h1>
          </div>
          <hr />
          <div className="row m-top__4 categroy__element">
            {categories.map((item) => (
              <div className="col-md-2 category__border">
                <div
                  className="category__box__wrapper"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="category__element__wrap">
                    <div className="category__widget__wrap">
                      <div className="category__widget__heading">
                        <h4 className="category__widget__title">
                          {item.category}
                        </h4>
                      </div>
                    </div>
                    <div className="category__widget__content__wrap">
                      <div className="category__widget__content">
                        <ul className="category__icon__list__items">
                          <li className="category__icon__list__item">
                            <Link to={`/shop?category=${item.category}`}>
                              {" "}
                              <VscTriangleRight /> Nut & Seed
                            </Link>
                          </li>
                          <li className="category__icon__list__item">
                            <Link to={`/shop?category=${item.category}`}>
                              {" "}
                              <VscTriangleRight /> Oils
                            </Link>
                          </li>
                          <li className="category__icon__list__item">
                            <Link to={`/shop?category=${item.category}`}>
                              {" "}
                              <VscTriangleRight /> Tomatos
                            </Link>
                          </li>
                          <li className="category__icon__list__item">
                            <Link to={`/shop?category=${item.category}`}>
                              {" "}
                              <VscTriangleRight /> Soup
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

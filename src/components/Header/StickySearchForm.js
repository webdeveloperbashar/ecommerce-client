import { FaSearch } from "react-icons/fa";
const StickySearchForm = ({ searchFormShow }) => {
  return (
    <div className="sticky__search__form__wrapper">
      <form>
        <div
          className={`d-flex ${
            searchFormShow
              ? "sticky__search__form active"
              : "sticky__search__form"
          }`}
        >
          <input
            type="text"
            placeholder="Search Product..."
            name="searchProduct"
            className="form-control search__form__input"
          />
          <button type="submit" className="btn">
            {" "}
            <FaSearch />{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StickySearchForm;

import SearchPanel from "../SearchPanel";
const StickySearchForm = ({ searchFormShow }) => {
  return (
    <div className="sticky__search__form__wrapper">
      <div
        className={`d-flex ${
          searchFormShow
            ? "sticky__search__form active"
            : "sticky__search__form"
        }`}
      >
        <SearchPanel />
      </div>
    </div>
  );
};

export default StickySearchForm;

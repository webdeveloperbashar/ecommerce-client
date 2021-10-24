import { Link } from "@reach/router";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySearch } from "../Store/Actions/ProductAction";
const SearchPanel = () => {
  // search panel
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    dispatch(getProductBySearch({ text: e.target.value }));
  };
  const { products } = useSelector((state) => state.searchProduct);
  return (
    <div className="search__panel__wrapper">
      <form className="search__form" onSubmit={(e) => e.preventDefault()}>
        <div className="d-flex">
          <input
            type="text"
            placeholder="Search product..."
            className="form-control"
            name="search"
            value={searchTerm}
            onChange={handleSearch}
            autoComplete="off"
          />
          <button type="submit" className="btn">
            <FaSearch />
          </button>
        </div>
      </form>
      {searchTerm && (
        <div className="product__suggetions">
          <ul className="suggetions__item">
            {!products?.length ? (
              <li className="suggetion__item__list">
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "30px",
                    fontSize: "14px",
                  }}
                >
                  Product Not Found
                </p>
              </li>
            ) : (
              products &&
              products?.map((item) => (
                <li
                  className="suggetion__item__list"
                  onClick={() => setSearchTerm("")}
                >
                  <Link to={`/product-details/${item._id}`}>
                    <div className="suggetion__product d-flex align-items-center justify-content-start">
                      <div className="product__image">
                        <img
                          src={item.productImage[0].url}
                          className="img-fluid"
                          alt="img"
                        />
                      </div>
                      <div className="product__content">
                        <h5>{item.name.length >= 30 ? `${item.name.slice(0,30)}...` : item.name}</h5>
                        <h3>${item.price}</h3>
                      </div>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPanel;

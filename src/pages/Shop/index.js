import React, { useEffect, useState, useReducer } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import PriceFilter from "../../components/PriceFilter";
import {Link} from "@reach/router"
import Product from "../../config/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProductByFilter } from "../../Store/Actions/ProductAction";
import PaginateNav from "../../config/PaginageNav";
const defaultValues = {
  category: [],
  min: 0,
  max: 100,
  page: 1,
  limit: 6,
};
const Index = () => {
  // device breakpoint
  const device = useBreakpoints();
  // use State
  const [category, setCategory] = useState([]);
  const [searchValues, setSearchValues] = useReducer(
    (state, action) => ({ ...state, ...action }),
    defaultValues
  );
  // get all category
  const categories = useSelector((state) => state.category);
  // get filtered products
  const { pd } = useSelector((state) => state.filterProduct);
  let productTags = [];
  const tags = pd?.docs.map((item) => item.tags);
  const splitTag = tags?.map((item) => item.split(","));
  for (let i = 0; i < splitTag?.length; i++) {
    for (let j = 0; j < splitTag[i]?.length; j++) {
      productTags.push(splitTag[i][j]);
    }
  }
  const goToPage = (page) => {
    setSearchValues({ page: page });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByFilter(searchValues));
  }, [dispatch, searchValues]);
  // category checked handler
  const handleCategory = (value) => {
    const currentCheckedCategory = value;
    const allCheckedCategories = [...category];
    const foundCategory = allCheckedCategories.indexOf(currentCheckedCategory);
    let newCheckedCategory;
    if (foundCategory === -1) {
      // Add Categroy
      newCheckedCategory = [...category, currentCheckedCategory];
      setCategory(newCheckedCategory);
      setSearchValues({ category: newCheckedCategory, page: 1 });
      // navigate("/shop", { replace: true });
    } else {
      // Remove Categroy
      newCheckedCategory = [...category];
      newCheckedCategory.splice(foundCategory, 1);
      setCategory(newCheckedCategory);
      setSearchValues({ category: newCheckedCategory, page: 1 });
    }
  };
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Helmet>
        <title>Shop - GreenValleyGrocery Shop</title>
      </Helmet>
      {device.isDesktop && <Nav isShow />}
      <div className="shop__wrapper">
        <div className="shop__section__image">
          <h2 className="text-center">Shop</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="shop__sidebar mt-5">
                <div className="price__sidebar box__shadow p-4 bg-light mt-3">
                  <label htmlFor="customRange1" className="form-label">
                    <h2 className="font-size__2">Price Filter</h2>
                  </label>
                  <hr />
                  <PriceFilter setSearchValues={setSearchValues} />
                </div>
                <div className="category__sidebar box__shadow p-4 bg-light mt-3">
                  <h2 className="font-size__2">Category</h2>
                  <hr />
                  <ul>
                    {categories &&
                      categories.map((item) => (
                        <div key={item._id} className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input mt-0"
                            id={item._id}
                            value={item.category}
                            name="category"
                            onChange={() => handleCategory(item.category)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={item._id}
                          >
                            {item.category}
                          </label>
                        </div>
                      ))}
                  </ul>
                </div>

                <div className="products__tag box__shadow p-4 bg-light mt-3">
                  <h2 className="font-size__2 py-2">Product Tags</h2>
                  <hr />
                  <div className="tags__wrapper">
                    {productTags?.map((tag) => (
                      <Link to={`/searchByTag/${tag}`}>{tag}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="shop__content box__shadow p-4 bg-light mt-5">
                <div className="d-flex align-items-center justify-content-between py__2">
                  <h1 className="section__title font-size__3 font-dark">
                    All Products
                  </h1>
                  <div className="sorting__flex align-items-center justify-content-between">
                    <p className="sort">Sort By</p>
                    <select name="sorting" className="sorting ms-3">
                      <option>Default</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                      <option>Highest Price</option>
                      <option>Lowest Price</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div
                  className="row shop__product"
                  style={{ minHeight: "200px" }}
                >
                  {!pd?.docs?.length > 0 ? (
                    <h4 className="text-capitalize no__msg">
                      product not found
                    </h4>
                  ) : (
                    pd?.docs?.map((item, index) => (
                      <div className="col-md-4" key={index + 1}>
                        <Product
                          key={index + 1}
                          product={item}
                          productId={item._id}
                          productImg={item.productImage[0].url}
                          productName={item.name}
                          productPrice={item.price}
                          productSize={item.weight + item.unit}
                          productDiscount={item.discount}
                        />
                      </div>
                    ))
                  )}
                </div>
                <div className="d-flex justify-content-center">
                  <PaginateNav
                    prods={pd}
                    prev={(page) => goToPage(page)}
                    next={(page) => goToPage(page)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;

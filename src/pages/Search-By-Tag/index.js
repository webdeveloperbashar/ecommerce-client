import React, { useEffect, useReducer } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Nav from "../../components/Header/Nav";
import PriceFilter from "../../components/PriceFilter";
// import NavLink from "../../config/NavLink";
import { Link } from "@reach/router";
import banner3 from "../../assets/product-banner/banner-3.jpg";
import Product from "../../config/Product";
import { useParams } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { getProductByFilter } from "../../Store/Actions/ProductAction";
import PaginateNav from "../../config/PaginageNav";
import HorizontalLine from "../../config/HorizontalLine";
const initialState = {
  category: [],
  keyword: "",
  min: 0,
  max: 100,
  page: 1,
  limit: 3,
};
const Index = () => {
  // device breakpoint
  const device = useBreakpoints();
  // use State
  const { tag } = useParams();
  const [searchValues, setSearchValues] = useReducer(
    (state, action) => ({ ...state, ...action }),
    initialState
  );
  // get filtered products
  const { pd } = useSelector((state) => state.filterProduct);
  // get product tags
  let productTags = [];
  const tags = pd?.docs.map((item) => item.tags);
  const splitTag = tags?.map((item) => item.split(","));
  for (let i = 0; i < splitTag?.length; i++) {
    for (let j = 0; j < splitTag[i]?.length; j++) {
      productTags.push(splitTag[i][j]);
    }
  }
  // console.log(splitTag)
  const goToPage = (page) => {
    setSearchValues({ page: page });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByFilter(searchValues));
  }, [dispatch, searchValues]);
  useEffect(() => {
    setSearchValues({ keyword: tag });
  }, [tag]);
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <Helmet>
        <title>{`${tag}`} - GreenValleyGrocery Shop</title>
      </Helmet>
      {device.isDesktop && <Nav isShow />}
      <div className="shop__wrapper">
        <div className="shop__section__image searchByTag__image">
          <h2 className="text-center text-white">{tag}</h2>
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
                <div className="category__banner">
                  <Link to="/">
                    <div className="product__banner">
                      <div
                        className="banner"
                        style={{ background: `url(${banner3})` }}
                      ></div>
                      <div className="banner__content">
                        <h3>EveryDay Hot Offer</h3>
                        <h2>59% Of</h2>
                        <p>Fruits & Vegetable</p>
                        <HorizontalLine
                          width="42px"
                          height="2px"
                          margin="25px auto"
                          background="rgb(103 188 15)"
                        />
                        <Link to="/shop" className="banner__shop__link">
                          shop
                        </Link>
                      </div>
                    </div>
                  </Link>
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

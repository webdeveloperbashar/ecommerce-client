import { Slider } from "@material-ui/core";
import React, { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { IoMdArrowDropright } from "react-icons/io";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import FakeData from "../../config/FakeData";
import Product from "../../config/Product";
import NavLink from "../../util/NavLink";
const Index = () => {
  // device breakpoint
  const device = useBreakpoints();
  const [rangeVal, setRangeVal] = useState([0, 100])
  const handleChange = (e, data) =>{
    setRangeVal(data)
  }
  const minVal = rangeVal[0] * 10;
  const maxVal = rangeVal[1] * 10;
  return (
    <>
      {device.isDesktop && <Nav isShow />}
      <div className="shop__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="shop__sidebar all__border p-4 bg-light mt-5">
                <div className="category__sidebar">
                  <h2 className="font-size__2 py__2">Category</h2>
                  <hr />
                  <ul>
                    <li>
                      <NavLink to="#" className="shop__sidebar__cate">
                        <IoMdArrowDropright className="font-size__3" />{" "}
                        Vegetable & Fruits
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="shop__sidebar__cate">
                        <IoMdArrowDropright className="font-size__3" /> Beverage
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="shop__sidebar__cate">
                        <IoMdArrowDropright className="font-size__3" /> Health &
                        Wealth
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="shop__sidebar__cate">
                        <IoMdArrowDropright className="font-size__3" /> Grocery
                        & Staples
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="shop__sidebar__cate">
                        <IoMdArrowDropright className="font-size__3" /> Dairy
                        Products
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="price__sidebar mt-3">
                  <label htmlFor="customRange1" className="form-label">
                    <h2 className="font-size__2">Price Filter</h2>
                  </label>
                  <hr />
                  <Slider
                    value={rangeVal}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    aria-labelledby="range-slider"
                  />
                  <p><span style={{fontWeight: '700'}}>Price:</span> {`$${minVal} - $${maxVal}`} </p>
                </div>
                <div className="products__tag">
                  <h2 className="font-size__2 py-2 mt-3">Product Tags</h2>
                  <hr />
                  <div className="tags">
                    <NavLink to="/">fruits</NavLink>
                    <NavLink to="/">kashmiri</NavLink>
                    <NavLink to="/">grapes</NavLink>
                    <NavLink to="/">mango</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="shop__content all__border p-4 bg-light mt-5">
                <div className="d-flex align-items-center justify-content-between py__2">
                  <h1 className="section__title font-size__2 font-dark__green">
                    Fruits & Beverages
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
                <div className="row shop__product">
                  {FakeData.map((item, index) => (
                    <div className="col-md-4" key={index + 1}>
                      <Product
                        productImg={`${item.img}`}
                        productName={`${item.name}`}
                        productPrice={`${item.price}`}
                      />
                    </div>
                  ))}
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

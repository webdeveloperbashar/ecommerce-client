import axios from "axios";

// get all product
export const getAllProduct = () => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4000/get-product`);
  dispatch({
    type: "FETCH_ALL_PRODUCT",
    payload: data,
  });
};

// paginate product
export const paginateProduct = (currentPage) => async (dispatch) => {
  const { data } = await axios.get(
    `http://localhost:4000/paginateProduct?page=${currentPage}`
  );
  dispatch({
    type: "FETCH_PAGINATE_PRODUCT",
    payload: data,
  });
};

// get product by filter query
export const getProductByFilter = (filter) => async (dispatch) => {
  // let link = `http://localhost:4000/searchFilter`;
  // if (!category.length > 0) {
  //   link = `http://localhost:4000/searchFilter?page=${currentPage}&limit=${limit}`;
  // } else {
  //   link = `http://localhost:4000/searchFilter?page=${currentPage}&limit=${limit}&category=${category}`;
  // }
  const { data } = await axios.post(`http://localhost:4000/searchFilter`, filter);
  dispatch({
    type: "GET_PRODUCT_BY_FILTER",
    payload: data,
  });
};
// get product by search query
export const getProductBySearch = (arg) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:4000/search`, arg);
  dispatch({
    type: "GET_PRODUCT_BY_SEARCH",
    payload: data,
  });
};

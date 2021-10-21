import axios from "axios";

// get all product
export const getAllProduct = () => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4000/get-product`);
  dispatch({
    type: "FETCH_ALL_PRODUCT",
    payload: data,
  });
};

// get product by filter query
export const getProductByFilter = (filter) => async (dispatch) => {
  const { data } = await axios.post(
    `http://localhost:4000/searchFilter`,
    filter
  );
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
// get product createdAt sorting
export const getCreatedSorting = (sort, order, limit) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:4000/products`, {
    sort,
    order,
    limit,
  });
  dispatch({
    type: "GET_CREATED__SORTING",
    payload: data,
  });
};
// get product sold sorting
export const getSoldSorting = (sort, order, limit) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:4000/products`, {
    sort,
    order,
    limit,
  });
  dispatch({
    type: "GET_SOLD_SORTING",
    payload: data,
  });
};
// get product rating descending sorting
export const getRatingDescSorting =
  (sort, order, limit) => async (dispatch) => {
    const { data } = await axios.post(`http://localhost:4000/products`, {
      sort,
      order,
      limit,
    });
    dispatch({
      type: "GET_RATING_DESC_SORTING",
      payload: data,
    });
  };
// get product rating ascending sorting
export const getRatingAscSorting = (sort, order, limit) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:4000/products`, {
    sort,
    order,
    limit,
  });
  dispatch({
    type: "GET_RATING_ASC_SORTING",
    payload: data,
  });
};

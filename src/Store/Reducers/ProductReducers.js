// get all product
export const getAllProduct = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCT":
      return action.payload;

    default:
      return state;
  }
};

// get paginate product
export const paginateProducts = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PAGINATE_PRODUCT":
      return action.payload;

    default:
      return state;
  }
};

// get product by search query
export const getProductBySearch = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCT_BY_SEARCH":
      return action.payload;
    default:
      return state;
  }
};
// get product by search query
export const getProductByFilter = (state = [], action) => {
  switch (action.type) {
    case "GET_PRODUCT_BY_FILTER":
      return action.payload;
    default:
      return state;
  }
};

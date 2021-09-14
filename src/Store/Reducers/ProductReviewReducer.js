export const ProductReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_REVIEW":
      return { review: action.payload };
    default:
      return state;
  }
};

// product review get
const initialState = {
  getReview: [],
};
export const ProductReviewGetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT_REVIEW":
      return { getReview: action.payload };
    default:
      return state;
  }
};

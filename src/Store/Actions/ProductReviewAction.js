import axios from "axios";
import { toast } from "react-toastify";

export const ProductReviewAction = (review) => async (dispatch) => {
  const { data } = await axios.post(
    `http://localhost:4000/product-review`,
    review
  );
  dispatch({
    type: "PRODUCT_REVIEW",
    payload: data,
  });
  if (data.success) {
    toast.success(data.success, {
      pauseOnHover: false,
    });
  }
};
// product review get
export const ProductReveiwGetAction = (productId) => async (dispatch) => {
  const { data } = await axios.get(
    `http://localhost:4000/get-productReview/${productId.match.params.id}`
  );
  dispatch({
    type: "GET_PRODUCT_REVIEW",
    payload: data,
  });
};

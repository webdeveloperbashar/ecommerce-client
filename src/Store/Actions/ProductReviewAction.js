import axios from "axios";
import { toast } from "react-toastify";

export const ProductReviewAction = (review) => async (dispatch) => {
  const { data } = await axios.post(
    `https://vast-coast-81152.herokuapp.com/product-review`,
    review
  );
  console.log(data)
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
    `https://vast-coast-81152.herokuapp.com/get-productReview/${productId}`
  );
  dispatch({
    type: "GET_PRODUCT_REVIEW",
    payload: data,
  });
};

import axios from "axios";
import { toast } from "react-toastify";

export const ProductReviewAction = (review, setLoading) => async (dispatch) => {
  const { data } = await axios.post(
    `https://vast-coast-81152.herokuapp.com/product-review`,
    review
  );
  console.log(data);
  dispatch({
    type: "PRODUCT_REVIEW",
    payload: data,
  });

  if (data.success) {
    toast.success(data.success, {
      pauseOnHover: false,
    });
    setLoading(false);
  }
  if (data.wrong || data.error) {
    setLoading(false);
    toast.error("Field is required", {
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

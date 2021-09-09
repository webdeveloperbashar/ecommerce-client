import axios from "axios";
import { toast } from "react-toastify";

export const OrderTrackingActions = (trackingId) => async (dispatch) => {
  const { data } = await axios.get(
    `http://localhost:4000/order-tracking/${trackingId}`
  );
  dispatch({
    type: "ORDER_TRACKING",
    payload: data,
  });
  if (data.message) {
    toast.error(data.message, {
      pauseOnHover: false,
    });
  }
};

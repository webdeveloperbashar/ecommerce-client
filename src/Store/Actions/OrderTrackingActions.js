import axios from "axios";
import { toast } from "react-toastify";

export const OrderTrackingActions = (trackingId, email) => async (dispatch) => {
  const { data } = await axios.get(
    `https://vast-coast-81152.herokuapp.com/order-tracking/${trackingId}/${email}`
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

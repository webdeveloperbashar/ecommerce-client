import axios from "axios";
import { toast } from "react-toastify";
import getDataFromLocalhost from "./../../config/GetLocalhostData";

export const OrderGetActions = () => async (dispatch) => {
  const user = getDataFromLocalhost("user");
  const { data } = await axios.get(
    `https://vast-coast-81152.herokuapp.com/orderGet/${user.Email}`
  );
  dispatch({
    type: "FETCH_ORDER_SUCCESS",
    payload: data,
  });
};

export const OrderCreateActions =
  (orderData, setStep, step) => async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems;
    const { data } = await axios.post(
      `https://vast-coast-81152.herokuapp.com/order-create`,
      orderData
    );
    dispatch({
      type: "ORDER_REQUEST_SUCCESS",
      payload: data,
    });
    if (data.success) {
      toast.success(data.success, {
        pauseOnHover: false,
      });
      localStorage.removeItem("cart");
      cartItems.splice(0, cartItems.length);
      setStep(step + 1);
    }
    if (data.error) {
      setStep(1);
      if(data.error.product){
        toast.error(data.error.product, {
          pauseOnHover: false,
        });
      }
      toast.error("Payment is required", {
        pauseOnHover: false,
      });
    }
  };

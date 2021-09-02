import axios from "axios";
import { toast } from "react-toastify";
import getDataFromLocalhost from "./../../config/GetLocalhostData";

export const OrderGetActions = () => async (dispatch) => {
  const user = getDataFromLocalhost("user");
  const { data } = await axios.get(
    `http://localhost:4000/orderGet/${user.Email}`
  );
  dispatch({
    type: "FETCH_ORDER_SUCCESS",
    payload: data,
  });
  let price = 0
  data.map(order=>(
    order.product.forEach(item=>(
      price = price + item.price * item.quantity
    ))
  ))
  console.log(price)
};

export const OrderCreateActions = (orderData) => async (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  const { data } = await axios.post(
    `http://localhost:4000/order-create`,
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
    delete cartItems[0];
  }
};

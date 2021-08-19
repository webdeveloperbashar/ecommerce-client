import axios from "axios";
import getDataFromLocalhost from './../../config/GetLocalhostData';

export const OrderActions = () => async (dispatch) => {
  const user = getDataFromLocalhost("user")
  const { data } = await axios.get(`http://localhost:4000/orderGet/${user.Email}`);
  dispatch({
    type: "FETCH_ORDER_SUCCESS",
    payload: data,
  });
};

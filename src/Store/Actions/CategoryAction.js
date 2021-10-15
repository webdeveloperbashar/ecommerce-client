import axios from "axios";
export const CategoryAction = () => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4000/get-category`);
  dispatch({
      type: 'FETCH_PRODUCT',
      payload: data
  })
};
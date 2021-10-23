import axios from "axios";
export const CategoryAction = () => async (dispatch) => {
  const { data } = await axios.get(`https://vast-coast-81152.herokuapp.com/get-category`);
  dispatch({
      type: 'FETCH_PRODUCT',
      payload: data
  })
};
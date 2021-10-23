import axios from "axios";

export const UserUpdateAction = (userData) => async (dispatch) => {
  const { data } = await axios.put(
    `https://vast-coast-81152.herokuapp.com/api/user/${userData.email}`,
    userData
  );
  dispatch({
    type: "USER_UPDATE",
    payload: data,
  });
  localStorage.setItem("user", JSON.stringify(data));
};

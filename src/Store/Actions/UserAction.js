import axios from "axios";
import { toast } from "react-toastify";
// user login
export const UserLogin = (userData, history) => async (dispatch) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/login`,
    userData
  );
  dispatch({
    type: "USER_LOGIN",
    payload: data,
  });
  if (data.credential) {
    localStorage.setItem("user", JSON.stringify(data));
    toast.success(data.credential, {
      pauseOnHover: false,
    });
    history.push("/");
  }
  if (data.wrong) {
    toast.error(data.wrong, {
      pauseOnHover: false,
    });
  }
};
// user signup
export const userSignup = (userData, history) => async (dispatch) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/signup`,
    userData
  );
  dispatch({
    type: "USER_SIGNUP",
    payload: data,
  });
  if (data.success) {
    sessionStorage.setItem("token", JSON.stringify(data));
    history.push("/login");
  }
};
// email verify
export const emailVerify = (token) => async (dispatch) => {
  const { data } = await axios.put(
    `http://localhost:4000/auth/email_verify/${token}`
  );
  dispatch({
    type: "EMAIL_VERIFY",
    payload: data,
  });
};
// user logout
export const userLogout = (history) => {
  localStorage.clear("user");
  history.push("/login");
  return {
    type: "USER_LOGOUT",
  };
};

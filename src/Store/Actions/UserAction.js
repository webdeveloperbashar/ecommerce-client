import axios from "axios";
import { toast } from "react-toastify";
// user login
export const UserLogin = (userData, redirect, navigate) => async (dispatch) => {
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
    navigate(redirect || "/");
  }
  if (data.wrong) {
    toast.error(data.wrong, {
      pauseOnHover: false,
    });
  }
};
// user signup
export const userSignup = (userData, navigate) => async (dispatch) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/signup`,
    userData
  );
  dispatch({
    type: "USER_SIGNUP",
    payload: data,
  });
  if (data.success) {
    sessionStorage.setItem("verify_message", JSON.stringify(data.success));
    localStorage.setItem("verify_email", JSON.stringify(data.verifyEmail));
    navigate("/login");
  }
};
// email verify
export const emailVerify = (email) => async (dispatch) => {
  const { data } = await axios.put(
    `http://localhost:4000/auth/email_verify/${email}`
  );
  dispatch({
    type: "EMAIL_VERIFY",
    payload: data,
  });
  if (data.success) {
    sessionStorage.clear("token");
    localStorage.clear("verify_email");
  }
};
// resend activation link
export const resendLink = (token) => async (dispatch) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/resend_code/${token}`
  );
  dispatch({
    type: "RESEND_LINK",
    payload: data,
  });
  if (data.success) {
    toast.success(data.success, {
      pauseOnHover: false,
    });
  }
};
// user forgot password
export const forgotPassword = (email) => async (dispatch) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/forgot_password`,
    email
  );
  dispatch({
    type: "FORGOT_PASSWORD",
    payload: data,
  });
  if (data.message) {
    toast.success(data.message, {
      pauseOnHover: false,
    });
  }
};
// user password update
export const resetPassword = (passwordData, token) => async (dispatch) => {
  const { data } = await axios.post(
    `http://localhost:4000/auth/reset_password/${token}`,
    passwordData
  );
  dispatch({
    type: "RESET_PASSWORD",
    payload: data,
  });
  if (data.success) {
    window.location.href = "http://localhost:3000";
  }
};
// chnage password
export const changePassword = (passwordData, email) => async (dispatch) => {
  const { data } = await axios.put(
    `http://localhost:4000/auth/change-password/${email}`,
    passwordData
  );
  dispatch({
    type: "CHANGE_PASSWORD",
    payload: data,
  });
  if (data.message) {
    toast.success(data.message, {
      pauseOnHover: false,
    });
  }
  if (data.wrong) {
    toast.error(data.wrong, {
      pauseOnHover: false,
    });
  }
};

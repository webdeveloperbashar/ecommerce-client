import axios from "axios";
import { toast } from "react-toastify";
// user login
export const UserLogin =
  (userData, redirect, navigate, setLoading) => async (dispatch) => {
    const { data } = await axios.post(
      `https://vast-coast-81152.herokuapp.com/auth/login`,
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
      setLoading(false);
    }
    if (data.wrong || data) {
      toast.error(data.wrong, {
        pauseOnHover: false,
      });
      setLoading(false);
    }
  };
// user signup
export const userSignup =
  (userData, navigate, setLoading) => async (dispatch) => {
    const { data } = await axios.post(
      `https://vast-coast-81152.herokuapp.com/auth/signup`,
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
      setLoading(false);
    }
    if (data) {
      setLoading(false);
    }
  };
// user logout
export const handleLogout = (navigate) => {
  localStorage.removeItem("user");
  navigate("/login");
};
// email verify
export const emailVerify = (email) => async (dispatch) => {
  const { data } = await axios.put(
    `https://vast-coast-81152.herokuapp.com/auth/email_verify/${email}`
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
    `https://vast-coast-81152.herokuapp.com/auth/resend_code/${token}`
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
    `https://vast-coast-81152.herokuapp.com/auth/forgot_password`,
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
    `https://vast-coast-81152.herokuapp.com/auth/reset_password/${token}`,
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
    `https://vast-coast-81152.herokuapp.com/auth/change-password/${email}`,
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

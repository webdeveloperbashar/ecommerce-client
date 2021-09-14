import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import getDataFromSession from "../config/GetSessionStorageData";
import { UserLogin } from "../Store/Actions/UserAction";
const Login = ({ width, heading, isShow }) => {
  // get data from sessionStorage
  const verifyMessage = getDataFromSession("verify_message");
  // hooks
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const redirect = query.get("redirect");
  // get error message from react-redux
  const message = useSelector((state) => state.login.user);
  // form Data send to react-redux hooks
  const dispatch = useDispatch();
  // formData store
  const [formData, setFormData] = useState();
  // form input value handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UserLogin(formData, history, redirect));
  };
  // password show and hide function
  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <>
      {isShow && (
        <div className="auth__form box__shadow" style={{ width: width }}>
          <h2 className="text-center text-dark font-size__3 mb-4">{heading}</h2>
          {verifyMessage && (
            <p className="alert alert-warning">{verifyMessage}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className={`form-control input__field ${
                  message?.email ? "is-invalid" : ""
                }`}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {message?.email && (
                <p className="invalid-feedback error__message">
                  {message?.email}
                </p>
              )}
            </div>
            <div className="form-group" style={{ position: "relative" }}>
              <span
                className="visible__icon"
                onClick={() => handlePasswordShow(!passwordShow)}
              >
                {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
              <input
                type={`${passwordShow ? "text" : "password"}`}
                name="password"
                className={`form-control input__field ${
                  message?.password ? "is-invalid" : ""
                }`}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {message?.password && (
                <p className="invalid-feedback error__message">
                  {message?.password}
                </p>
              )}
            </div>
            <div className="form-group login__control d-flex align-items-center justify-content-between">
              <span className="remember">
                <input type="checkbox" name="checkbox" /> Remember me
              </span>
              <span className="forgot">
                <Link to="/forgotpassword" className="text-primary">
                  Forgot Password
                </Link>
              </span>
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn w-100 py-3 text-white auth__button"
              >
                Login
              </button>
            </div>
            <div className="form-group">
              <span className="text-dark font-size__1 account__text">
                Don't have an account?
              </span>{" "}
              <Link to="/register" className="text-primary account__suggest">
                Create An Account
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;

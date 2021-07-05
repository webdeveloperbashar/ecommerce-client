import { Link } from "@reach/router";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const Login = ({ width, heading, isShow }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <>
      {isShow && (
        <div className="auth__form box__shadow" style={{ width: width }}>
          <h2 className="text-center text-dark font-size__3 mb-4">{heading}</h2>
          <form>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control input__field"
                placeholder="Enter your email"
              />
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
                className="form-control input__field"
                placeholder="Enter your password"
              />
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

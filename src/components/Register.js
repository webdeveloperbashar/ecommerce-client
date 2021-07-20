import { Link } from "@reach/router";
import { useState } from "react";
const Register = () => {
  const [checkType, setCheckType] = useState(false);
  const handleChange = () => {
    setCheckType(!checkType);
  };
  return (
    <>
      <div className="auth__form box__shadow" style={{ width: "48%" }}>
        <h2 className="text-center text-dark font-size__3 mb-4">
          Create An Account
        </h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control input__field"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              className="form-control input__field"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control input__field"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              name="phone"
              className="form-control input__field"
              placeholder="Enter your phone"
            />
          </div>
          <div className="form-group">
            <input
              type={`${checkType ? "text" : "password"}`}
              name="password"
              className="form-control input__field"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <input
              type={`${checkType ? "text" : "password"}`}
              name="passwordConfirm"
              className="form-control input__field"
              placeholder="Enter your confirm password"
            />
          </div>
          <div className="form-group login__control d-flex align-items-center justify-content-between">
            <span className="remember">
              <input
                type="checkbox"
                onChange={() => handleChange(!checkType)}
                name="checkbox"
              />{" "}
              Show Password
            </span>
            <span className="forgot"></span>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn w-100 py-3 text-white auth__button"
            >
              Register Now
            </button>
          </div>
          <div className="form-group">
            <span className="text-dark font-size__1 account__text">
              Already have an account?
            </span>{" "}
            <Link to="/login" className="text-primary account__suggest">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

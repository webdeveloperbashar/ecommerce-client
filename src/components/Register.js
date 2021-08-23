import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userSignup } from "../Store/Actions/UserAction";
const Register = () => {
  // history hooks
  const history = useHistory();
  // get error message from react-redux
  const message = useSelector((state) => state.signup.user);
  // redux data send hooks
  const dispatch = useDispatch();
  // signup form data store
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const signupData = { ...formData };
    signupData.gender = "";
    signupData.dateofbirth = "";
    signupData.profile = "";
    dispatch(userSignup(signupData, history));
  };
  // pasword check type
  const [checkType, setCheckType] = useState(false);
  const handleCheckType = () => {
    setCheckType(!checkType);
  };
  return (
    <>
      <div className="auth__form box__shadow" style={{ width: "48%" }}>
        <h2 className="text-center text-dark font-size__3 mb-4">
          Create An Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className={`form-control input__field ${
                message?.name ? "is-invalid" : ""
              }`}
              placeholder="Enter your name"
            />
            {message?.name && (
              <p className="invalid-feedback error__message">{message?.name}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className={`form-control input__field ${
                message?.username ? "is-invalid" : ""
              }`}
              placeholder="Enter your username"
            />
            {message?.username && (
              <p className="invalid-feedback error__message">
                {message?.username}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className={`form-control input__field ${
                message?.email ? "is-invalid" : ""
              }`}
              placeholder="Enter your email"
            />
            {message?.email && (
              <p className="invalid-feedback error__message">
                {message?.email}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              className={`form-control input__field ${
                message?.phone ? "is-invalid" : ""
              }`}
              placeholder="Enter your phone"
            />
            {message?.phone && (
              <p className="invalid-feedback error__message">
                {message?.phone}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type={`${checkType ? "text" : "password"}`}
              name="password"
              onChange={handleChange}
              className={`form-control input__field ${
                message?.password ? "is-invalid" : ""
              }`}
              placeholder="Enter your password"
            />
            {message?.password && (
              <p className="invalid-feedback error__message">
                {message?.password}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type={`${checkType ? "text" : "password"}`}
              name="passwordConfirm"
              onChange={handleChange}
              className={`form-control input__field ${
                message?.passwordConfirm ? "is-invalid" : ""
              }`}
              placeholder="Enter your confirm password"
            />
            {message?.passwordConfirm && (
              <p className="invalid-feedback error__message">
                {message?.passwordConfirm}
              </p>
            )}
          </div>
          <div className="form-group login__control d-flex align-items-center justify-content-between">
            <span className="remember">
              <input
                type="checkbox"
                onChange={() => handleCheckType(!checkType)}
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

import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import TopHeader from "../../components/Header/TopHeader";
import { resetPassword } from "../../Store/Actions/UserAction";

const NewPasswordSetup = () => {
  // send data to react-redux
  const dispatch = useDispatch();
  const { token } = useParams();
  // device breakpoints
  const device = useBreakpoints();
  // get data from react-reduxt store
  const message = useSelector((state) => state.resetPassword.reset);
  // form data store state
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(formData, token));
  };
  return (
    <>
      {device.isDesktop && <TopHeader />}
      <div className="auth__form forgot__password mt-5 mb-5">
        <h2 className="text-dark text-center font-size__3 mb-4">
          Reset Password
        </h2>
        {message?.wrong && (
          <p className="alert alert-warning">{message?.wrong}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className={`form-control input__field ${
                message?.password ? "is-invalid" : ""
              }`}
              onChange={handleChange}
              placeholder="Enter your new password"
            />
            {message?.password ? (
              <p className="invalid-feedback error__message">
                {message?.password}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              className={`form-control input__field ${
                message?.confirmPassword ? "is-invalid" : ""
              }`}
              onChange={handleChange}
              placeholder="Enter confirm new password"
            />
            {message?.confirmPassword ? (
              <p className="invalid-feedback error__message">
                {message?.confirmPassword}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn w-100 py-3 text-white auth__button"
            >
              SET PASSWORD
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NewPasswordSetup;

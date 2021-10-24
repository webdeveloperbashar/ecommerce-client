import { useEffect } from "react";
import { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import TopHeader from "../../components/Header/TopHeader";
import { forgotPassword } from "../../Store/Actions/UserAction";
const Index = () => {
  // device breakpoints
  const device = useBreakpoints();
  // get data from react-reduxt store
  const message = useSelector((state) => state.forgotPassword.forgot);
  // react-redux hooks
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(value));
  };
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      {device.isDesktop && <TopHeader />}
      <div className="auth__form forgot__password mt-5 mb-5">
        <h2 className="text-dark text-center font-size__3 mb-4">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className={`form-control input__field ${
                message?.email ? "is-invalid" : ""
              }`}
              onChange={(e) => setValue({ [e.target.name]: e.target.value })}
              placeholder="Enter your email"
            />
            {message?.email ? (
              <p className="invalid-feedback error__message">
                {message?.email}
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
              SEND LINK
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Index;

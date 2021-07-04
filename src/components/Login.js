import { Link } from "@reach/router";

const Login = ({ width, heading }) => {
  return (
    <>
      <div className="login__form box__shadow" style={{width: width}}>
        <h2 className="text-center text-dark font-size__3 mb-4">{heading}</h2>
        <form>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control email__input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control password__input"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group login__control d-flex align-items-center justify-content-between">
            <span className="remember">
              <input type="checkbox" name="checkbox" /> Remember me
            </span>
            <span className="forgot">
              <Link to="/forgotpassword" className="text-primary">Forgot Password</Link>
            </span>
          </div>
          <div className="form-group">
              <button type="submit" className="btn w-100 py-3 text-white login__button">Login</button>
          </div>
          <div className="form-group">
              <span className="text-dark font-size__1 account__text">Don't have an account?</span>{" "}<Link to='/register' className="text-primary account__suggest">Create An Account</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

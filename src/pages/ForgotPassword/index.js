import { useState } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { Link } from 'react-router-dom';
const Index = () => {
  const [value, setValue] = useState({
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <div className="m-5">
        <Link to="/">
          <span
            className="bg-light box__shadow p-2 text-dark font-size__2"
            style={{ cursor: "pointer" }}
          >
            <CgArrowLongLeft /> Back to home
          </span>
        </Link>
      </div>
      <div className="auth__form forgot__password mt-5 mb-5">
        <h2 className="text-dark text-center font-size__3 mb-4">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control input__field"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn w-100 py-3 text-white auth__button"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;

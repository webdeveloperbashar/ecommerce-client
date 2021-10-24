import { useEffect, useState } from "react";
const Index = () => {
  const [checkType, setCheckType] = useState(false);
  const handleTypeCheck = () => {
    setCheckType(!checkType);
  };
  const [value, setValue] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <div className="auth__form forgot__password mt-5 mb-5">
        <h2 className="text-dark text-center font-size__3 mb-4">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type={`${checkType ? "text" : "password"}`}
              name="password"
              onChange={()=>handleChange}
              className="form-control input__field"
              placeholder="Enter new password"
            />
          </div>
          <div className="form-group">
            <input
              type={`${checkType ? "text" : "password"}`}
              name="confirmPassword"
              onChange={()=>handleChange}
              className="form-control input__field"
              placeholder="Enter confirm password"
            />
          </div>
          <div className="form-group login__control d-flex align-items-center justify-content-between">
            <span className="remember">
              <input
                type="checkbox"
                onChange={() => handleTypeCheck(!checkType)}
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
              RESET PASSWORD
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;

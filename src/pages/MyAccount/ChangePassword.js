import React, { useState } from "react";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="changePassword__wrapper">
      <div className="account__heading">
        <h2 className="text-start">Change Password</h2>
      </div>
      <hr />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="signle__content d-flex align-items-center">
            <span className="label">Old Password</span>
            <input
              type="password"
              name="oldpassword"
              onChange={handleChange}
              value=""
              placeholder="Enter old password"
              className="form-control account__input__field input__field my-3 w-50"
            />
          </div>
          <div className="signle__content d-flex align-items-center">
            <span className="label">New Password</span>
            <input
              type="password"
              name="newpassword"
              onChange={handleChange}
              value=""
              placeholder="Enter new password"
              className="form-control account__input__field input__field my-3 w-50"
            />
          </div>
          <div className="signle__content d-flex align-items-center">
            <span className="label">Confirm New Password</span>
            <input
              type="password"
              name="confirmpassword"
              onChange={handleChange}
              value=""
              placeholder="Enter confirm new password"
              className="form-control account__input__field input__field my-3 w-50"
            />
          </div>
          <div className="signle__content d-flex align-items-center">
            <span className="label"></span>
            <input
              type="submit"
              value="Update"
              className="btn account__input__field my-3 py-3 px-5 "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
